const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

// Load speaker data from JSON
const speakersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'speakers-data.json'), 'utf-8'));
const { speakers, templates, panels } = speakersData;

// Normalize panel title for lookup (remove spaces around ·)
function normalizePanelTitle(title) {
  return title.replace(/\s*·\s*/g, '·');
}

// Get moderator info for a panel
function getModeratorInfo(panelTitle) {
  const normalizedTitle = normalizePanelTitle(panelTitle);
  for (const [key, value] of Object.entries(panels)) {
    if (normalizePanelTitle(key) === normalizedTitle || normalizedTitle.includes(normalizePanelTitle(key.split('·')[0]))) {
      return value;
    }
  }
  // Fallback: search by partial match
  for (const [key, value] of Object.entries(panels)) {
    if (normalizedTitle.includes(key.split('·')[0]) || key.includes(normalizedTitle.split('·')[0])) {
      return value;
    }
  }
  return { moderator: '', honorific: '' };
}

// Generate invitation text based on participation type
function generateInvitationText(speaker) {
  const { name, honorific, participation } = speaker;

  switch (participation.type) {
    case 'keynote':
      return templates.keynote
        .replace('{{NAME}}', name)
        .replace('{{HONORIFIC}}', honorific)
        .replace('{{KEYNOTE_TITLE}}', participation.title);

    case 'panel':
      const panelTitle = normalizePanelTitle(participation.title);
      if (participation.isModerator) {
        return templates.panel_moderator
          .replace('{{NAME}}', name)
          .replace('{{HONORIFIC}}', honorific)
          .replace('{{PANEL_TITLE}}', panelTitle);
      } else {
        return templates.panel_speaker
          .replace('{{NAME}}', name)
          .replace('{{HONORIFIC}}', honorific)
          .replace('{{PANEL_TITLE}}', panelTitle);
      }

    case 'keynote_and_panel':
      return templates.keynote_and_panel
        .replace('{{NAME}}', name)
        .replace('{{HONORIFIC}}', honorific)
        .replace('{{KEYNOTE_TITLE}}', participation.keynote.title);

    default:
      return `诚邀你参加全球开源商业创新大会。`;
  }
}

async function generateInvitation(speaker, templateHtml) {
  // Generate invitation text
  const invitationText = generateInvitationText(speaker);

  // Replace placeholders in template
  let html = templateHtml
    .replace(/\{\{SPEAKER_NAME\}\}/g, speaker.name)
    .replace(/\{\{SPEAKER_PHOTO\}\}/g, speaker.photo)
    .replace(/\{\{SPEAKER_ROLE\}\}/g, speaker.role)
    .replace(/\{\{INVITATION_TEXT\}\}/g, invitationText);

  // Write HTML file
  const htmlPath = path.join(__dirname, `invitation-${speaker.id}.html`);
  fs.writeFileSync(htmlPath, html);
  console.log(`Generated HTML: ${htmlPath}`);

  // Generate PNG
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 450, height: 3400 },
    deviceScaleFactor: 3
  });
  const page = await context.newPage();
  await page.goto(`file://${htmlPath}`);
  await page.waitForLoadState('networkidle');

  const pngPath = path.join(__dirname, `invitation-${speaker.id}.png`);
  await page.screenshot({ path: pngPath, fullPage: true });
  await browser.close();

  // Crop white space
  const { execSync } = require('child_process');
  execSync(`python3 -c "
from PIL import Image
import numpy as np

img = Image.open('${pngPath}')
img_array = np.array(img)

for i in range(img_array.shape[0] - 1, -1, -1):
    if not np.all(img_array[i] > 250):
        last_row = i + 5
        break

cropped = img.crop((0, 0, img.width, last_row))
cropped.save('${pngPath}')
print(f'Generated PNG: ${pngPath} ({cropped.width}x{last_row})')
"`);

  console.log(`Speaker: ${speaker.name}`);
  console.log(`Participation: ${speaker.participation.type}`);
  console.log(`Invitation text: ${invitationText}\n`);
}

async function main() {
  // Read template
  const templatePath = path.join(__dirname, 'template.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Template not found! Please create template.html first.');
    process.exit(1);
  }
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  // Generate for specific speaker if provided as argument
  const speakerId = process.argv[2];

  if (speakerId) {
    const speaker = speakers.find(s => s.id === speakerId);
    if (!speaker) {
      console.error(`Speaker not found: ${speakerId}`);
      console.log('Available speakers:', speakers.map(s => s.id).join(', '));
      process.exit(1);
    }
    await generateInvitation(speaker, templateHtml);
  } else {
    // Generate for all speakers
    console.log(`Generating invitations for ${speakers.length} speakers...\n`);
    for (const speaker of speakers) {
      await generateInvitation(speaker, templateHtml);
    }
  }

  console.log('Done!');
}

main().catch(console.error);
