# Speaker Invitation Generator

Generates personalized invitation images for GOBI 2025 conference speakers.

## Files

- `template.html` - HTML template with placeholders for speaker info
- `speakers-data.json` - Speaker data and invitation text templates
- `generate-invitations.cjs` - Node.js script to generate invitations
- `invitation-{speaker-id}.html` - Generated HTML for each speaker
- `invitation-{speaker-id}.png` - Generated PNG for each speaker

## Usage

```bash
# From the project root directory
cd src/invitations

# Generate all invitations
node generate-invitations.cjs

# Generate for a specific speaker
node generate-invitations.cjs jiang-tao
node generate-invitations.cjs nana
```

## Dependencies

- [Playwright](https://playwright.dev/) - For HTML to PNG rendering
- Python 3 with PIL/Pillow - For cropping white space from PNGs

## Speaker Data Structure

Each speaker in `speakers-data.json` has:

```json
{
  "id": "speaker-id",
  "name": "Speaker Name",
  "honorific": "先生/女士",
  "photo": "../../public/images/speakers/photo.png",
  "role": "Title and Organization",
  "participation": {
    "type": "keynote|panel|keynote_and_panel",
    "title": "Session title",
    "isModerator": true/false
  }
}
```

## Invitation Types

- **keynote** - Keynote speaker invitation
- **panel** - Panel participant (with `isModerator` flag for moderators)
- **keynote_and_panel** - Speaker with both keynote and panel participation

## Adding a New Speaker

1. Add speaker entry to `speakers-data.json`
2. Run `node generate-invitations.cjs {speaker-id}`
