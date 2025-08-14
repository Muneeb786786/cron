const puppeteer = require('puppeteer-core');

(async () => {
  try {
    console.log("Starting cron job...");

    const browser = await puppeteer.launch({
      headless: true,                    // Run browser in headless mode
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // Use bundled Chromium
      executablePath: puppeteer.executablePath()
    });

    const page = await browser.newPage();
    await page.goto('https://tools.apkmodz.site/news/?wp_automatic=cron', {
      waitUntil: 'networkidle2'
    });

    console.log("Page loaded successfully.");
    await browser.close();
    console.log("Cron job finished successfully.");

  } catch (error) {
    console.error("Error running cron job:", error);
    process.exit(1);
  }
})();
