import { expect, Locator} from "@playwright/test";
export class PropertyMarketing
{
    propertymarketing;
    constructor(page)
    {
        this.page=page;  
        this.propertymarketingbutton= this.page.getByText('Property Marketing');
        this.emailmarketingarrow=this.page.locator('[class="arrow"]').nth(0);
        this.discardbutton=this.page.getByRole('button').filter ({hasText:'Discard'})
        this.template=this.page.$$('[class="js-thumbnails-wrapper thumbnails-wrapper email-options"] [class="btn btn-green btn-preview js-preview"]')
       this.description=this.page.$$('[class="js-thumbnails-wrapper thumbnails-wrapper email-options"] [class="js-name theme-title"]')
        this.selectonetemplate=this.page.locator('[class="row wrap-theme"]  [type="button"][subject="Open house - Multi Listing Template"]').filter({hasText:'Select'})
    }  
    async navtoPropertymarketing()
    {
        await this.propertymarketingbutton.click();
        await this.page.waitForTimeout(2000);
       // await this.propertymarketing.waitFor({state:'visible'});
        await this.emailmarketingarrow.click();
        await this.page.waitForTimeout(20000);
        if(await this.discardbutton.isVisible()){
        await this.discardbutton.click();
        }
        const Template = await this.template
        const Description = await this.description
        console.log(Template.length);
       for (let i=0; i<Template.length;i++)
       {
         let tempdesciption= await Description[i].textContent();
        await Template[i].click();
        await expect(page.getByText(`Preview - ${tempdesciption}`)).toBeVisible();
       }
        await this.selectonetemplate.click();
}
}
