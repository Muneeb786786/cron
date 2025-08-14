// index.js
const puppeteer = require('puppeteer-core');

(async () => {
  try {
    console.log("Starting cron job...");

    // Launch Puppeteer using Render's system Chromium
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    // Set a realistic User-Agent
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36'
    );

    // Optional: Set viewport size
    await page.setViewport({ width: 1280, height: 800 });

    // Go to your cron URL
    const url = 'https://tools.apkmodz.site/news/?wp_automatic=cron';
    console.log(`Visiting ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Wait a few seconds for JS to run (e.g., cookie scripts)
    await page.waitForTimeout(5000);

    // Log page content (optional)
    const content = await page.content();
    console.log("Page loaded successfully.");
    // console.log(content); // Uncomment if you want full HTML in logs

    // Close browser
    await browser.close();

    console.log("Cron job finished successfully.");
  } catch (error) {
    console.error("Error running cron job:", error);
    process.exit(1);
  }
})();
