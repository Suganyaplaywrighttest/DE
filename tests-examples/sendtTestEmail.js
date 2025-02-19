import {expect, Locator } from "@playwright/test";
export class SendTestEmail
{
    sendtestemail;
    sendttestemailbutton;
    enteremailid;
    entersendbutton;
    constructor(page)
    {
        this.page=page;
this.sendtestemail =this.page.getByText('Send Test Email').nth(0);
this.sendttestemail=this.page.getByText('Send Test Email').nth(0);
this.enteremailid=this.page.locator('input[type="email"]');
this.entersendbutton=this.page.locator('[type="button"][name="C"]').filter({hasText: 'Send'});
    }

async navtoSendTestEmail()
{
  await this.sendtestemail.click();
  //await this.page.pause();
  await expect(this.sendtestemail).toBeVisible();
  //await page.waitForTimeout(20000);
  await this.enteremailid.fill('Suganya@gabriels.net');
  //await page.waitForTimeout(5000);
  await this.entersendbutton.click({ force: true });
  //await this.page.pause();
  await this.page.waitForTimeout(2000);
  await expect(this.page.getByText('Send test email succeeded')).toBeVisible();
}
}
