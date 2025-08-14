import puppeteer from "puppeteer";

const LIGHT_PANDA_TOKEN = "cfad74152582eff2c5014dd475be46f0edf8deec661e4821833172b36914b09f";
const URL_TO_OPEN = "https://deandev.com/redirector/redirector/?redirect=aHR0cHM6Ly90b29scy5hcGttb2R6LnNpdGUvbmV3cy8/d3BfYXV0b21hdGljPWNyb24=;";

async function openLink() {
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cloud.lightpanda.io/ws?token=${LIGHT_PANDA_TOKEN}`,
    });

    const page = await browser.newPage();

    // Ignore HTTPS errors for pages with invalid certificates
    await page.goto(URL_TO_OPEN, {
      waitUntil: "networkidle2",
      ignoreHTTPSErrors: true, // <<< important
    });

    console.log(`Opened ${URL_TO_OPEN} at ${new Date().toLocaleTimeString()}`);

    await page.close();
    await browser.disconnect();
  } catch (err) {
    console.error("Error opening link:", err);
  }
}

// Run every 5 minutes
setInterval(openLink, 5 * 60 * 1000);

// Run once immediately
openLink();
