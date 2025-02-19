import { test, expect } from "@playwright/test";
test.use({
    ignoreHTTPSErrors: true
  });
  test ('campaign',async({page})=>{
    await page.goto('https://crm-dev.gabriels.net//impersonate.aspx?token=82CEC0B6-EB18-4DD0-A1CA-074174E1D814');
    await page.setViewportSize({ width: 1000, height: 600 });
  });