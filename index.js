const puppeteer = require('puppeteer'); // use full puppeteer

(async () => {
  try {
    console.log("Starting cron job...");

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://tools.apkmodz.site/news/?wp_automatic=cron', { waitUntil: 'networkidle2' });
    console.log("Page loaded successfully.");

    await browser.close();
    console.log("Cron job finished successfully.");
  } catch (error) {
    console.error("Error running cron job:", error);
    process.exit(1);
  }
})();
