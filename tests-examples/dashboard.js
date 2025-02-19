import { expect, Locator} from "@playwright/test";
export class Dashboard
{
    dashboardpanel;
    mylistings;
    icheckbox;

    propertymarketing;
    sendemail;
    constructor(page)
    {
        this.page=page;
        this.dashboardpanel = this.page.locator('[data-ref="dashboardview"]').filter({hasText:'Listings'});
        this.mylistings =this.page.locator('[data-ref="mylistingmanager"]');
        this.icheckbox= this.page.locator('[class="icheck"][type="checkbox"]').nth(0);
        //this.checkbox= page.$$('[class="icheck"][type="checkbox"]');          
    }


    async navtoMylistings()
    {
        await this.dashboardpanel.click();
        await this.page.waitForTimeout(2000);
        await this.mylistings.waitFor({state:'visible'});
        await this.page.waitForTimeout(2000);
        await this.mylistings.click();
        await this.icheckbox.click({ force: true });
        await this.page.waitForTimeout(2000);
        //await this.page.pause();
      //  let checkbox= await this.page.$$('[class="icheck"][type="checkbox"]'); 
        //await checkbox[0].waitFor({state:'visible'});
        await this.page.waitForTimeout(2000);
        const links = await this.page.$$('[class="icheck"][type="checkbox"]'); 
        console.log(links.length);
        let count=1;
     for (let i=1; i<links.length && count<4;i++)
  {
    await links[i].click();
    count=count + 1;
    console.log(count);
  }
    }
}
