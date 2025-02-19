import { expect, Locator} from "@playwright/test";
export class SendEmail
{
    sendemail;
    sendemailclick
    sendemailsuccessmessage
    sendemailnext1
    nextfinal
    sendemailbuttonfinal
    sendemailsuccess1
    constructor(page)
    {
        this.page=page;  
        this.sendemailclick=this.page.getByText('Send Email');
        this.sendemailsuccessmessage=this.page.locator('html');
        //this.sendemailtotalemails=this.page.$$('[class="source tagsinput tab-pane c-recipients-idcontacts"] [class="add"]');
        this.sendemailnext1=this.page.locator('[class="btn wizard-next js-help-target btn-blue"]');
        //this.sendemail=page.locator('[class="btn wizard-next js-help-target btn-blue"]');
        //this.sendemail=page.getByText('Next');
        //this.sendemail=page.locator('[class="btn wizard-next js-help-target btn-blue"]');
        //this.sendemail=page.getByText('Next');
       this.nextfinal=page.locator('[class="btn wizard-next js-help-target btn-blue"]');
        this.sendemail=page.getByText('Send').nth(-1);
        this.sendemailbuttonfinal=this.page.locator('[class="btn wizard-next js-help-target btn-green"]');
        this.sendemailsuccess1=this.page.getByText('Success');
    }  


async navtoSendEmail()
{
    await this.sendemailclick.click();
 await expect(this.sendemailsuccessmessage).toBeVisible();
 await this.page.waitForTimeout(25000);
 const gettotalemails = await this.page.$$('[class="source tagsinput tab-pane c-recipients-idcontacts"] [class="add"]');
    console.log(gettotalemails.length);
    let counts=1;
  for (let i=0; i<gettotalemails.length && counts<4;i++)
  {
    await gettotalemails[i].click();
   counts=counts + 1;
   console.log(counts);
  }
  await this.page.waitForTimeout(2000);
  await this.page.waitForTimeout(2000);
  await this.sendemailnext1.click();
  await this.page.waitForTimeout(2000);
  await expect(this.sendemailnext1).toBeVisible();
  await this.sendemailnext1.click();
  await this.page.waitForTimeout(5000);
  await expect(this.sendemailnext1).toBeVisible();
  await this.nextfinal.click();
  await this.page.waitForTimeout(5000);
  await expect(this.sendemailbuttonfinal).toBeVisible();
  await this.sendemailbuttonfinal.click();
 await this.page.waitForTimeout(5000);
}
}
