const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set user agent to simulate real browser
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36"
    );

    // Go to your cron URL
    await page.goto('https://tools.apkmodz.site/news/?wp_automatic=cron', {
      waitUntil: 'networkidle2',
    });

    console.log('Cron URL visited successfully');

    await browser.close();
  } catch (err) {
    console.error('Error:', err);
  }
})();
