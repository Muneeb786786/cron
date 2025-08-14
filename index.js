const puppeteer = require('puppeteer');

(async () => {
  console.log("Starting cron job...");

  try {
    // Launch Puppeteer browser with Render.com compatible flags
    const browser = await puppeteer.launch({
      headless: true, // run in headless mode
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // required on Render and many cloud servers
    });

    console.log("Browser launched successfully");

    // Example: Open a page and take a screenshot
    const page = await browser.newPage();
    await page.goto('https://example.com'); // replace with your target URL
    console.log("Page loaded");

    // Take a screenshot (optional)
    await page.screenshot({ path: 'example.png' });
    console.log("Screenshot saved as example.png");

    // Close browser
    await browser.close();
    console.log("Browser closed, cron job finished successfully");

  } catch (err) {
    console.error("Error running cron job:", err);
  }
})();
