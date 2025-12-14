const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 3 });
  await page.goto('file://' + path.join(__dirname, 'agenda-poster.html'));
  await page.waitForTimeout(500);
  const poster = await page.$('.poster');
  await poster.screenshot({ path: path.join(__dirname, 'agenda-poster.png') });
  await browser.close();
  console.log('Generated agenda-poster.png');
})();
