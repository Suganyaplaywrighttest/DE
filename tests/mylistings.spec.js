import { test, expect } from "@playwright/test";
import { Dashboard } from "../tests-examples/dashboard";
import { PropertyMarketing } from "../tests-examples/propertyMarketing";
import { SendEmail } from "../tests-examples/sendEmail";
import { SendTestEmail } from "../tests-examples/sendtTestEmail";
test.use({
    ignoreHTTPSErrors: true

  });
test ('myListingspage',async({page})=>{
    await page.goto('https://crm-dev.gabriels.net//impersonate.aspx?token=82CEC0B6-EB18-4DD0-A1CA-074174E1D814');
    await page.setViewportSize({ width: 1200, height: 600 });
    await page.pause();  
    const dashboard = new Dashboard(page)
    const propertymarketing=new PropertyMarketing(page)
    await dashboard.navtoMylistings();
    await propertymarketing.navtoPropertymarketing();
    const sendemail =new SendEmail(page)
    await sendemail.navtoSendEmail();
    const sendtestemail =new SendTestEmail(page)
    await sendtestemail.navtoSendTestEmail();

  
 // await page.pause();
  await page.getByText('Clone').click();
  await expect(page.getByText('Success')).toBeVisible();
  await page.waitForTimeout(10000);
  //await expect(page(getByText('')))
  //await page.pause();
  const Clone = await page.locator('[class="js-template-name"]').textContent();
  console.log(Clone);
  //await page.pause();
  await expect(page.getByText(`Edit Design : ${Clone}`)).toBeVisible();
  await page.getByRole('button', { name: ' Share Options' }).click();
  //await page.locator('[class="iCheck-helper"]').click();
  await page.locator('li').filter({ hasText: 'Globally (with everyone)' }).getByRole('insertion').click();
  await page.getByRole('button').filter ({hasText:'Save' }).click();
  await expect(page.getByText('Success')).toBeVisible();
  await page.getByRole('button', { name: 'Edit Design' }).click();
  await page.waitForTimeout(10000);
  //true or false isvisble()
 if(await page.getByRole('button').filter ({hasText:'Discard'}).isVisible()){
 await page.getByRole('button').filter ({hasText:'Discard'}).click();
 }
 await page.getByRole('button', { name: 'Manage' }).click();
 await page.locator('[class="icon-plus-sign js-btn-add-folder"]').click();
 const Filename = 'DEVTestFile' + Date.now();
 await page.locator('[name="FileName"]').fill(Filename);
 await page.getByRole('button'). filter({hasText: 'Add'}).click();
 await page.waitForTimeout(5000);
 await expect(page.getByRole('link', { name: Filename})).toBeVisible();
 //await page.pause();
 await page.locator('[class="close"]').nth(1).click();
 await page.getByRole('button').filter({hasText: 'Update'}).click();
 //await page.waitForTimeout(10000);
 await expect(page.getByText('Success')).toBeVisible();
 await page.getByText('Email Settings').nth(0).click();
 await page.getByText('Save').nth(1).click();
 await expect(page.getByText('Success')).toBeVisible();
 //await page.pause();
  //await expect(page.getByText('Next')).toBeVisible();
  //await page.locator('[class="btn btn-gold btn-submit"]').click();
})







test ('SingleListingcheckEmailMarketing',async({page})=>{
  await page.goto('https://crm-dev.gabriels.net//impersonate.aspx?token=82CEC0B6-EB18-4DD0-A1CA-074174E1D814');
  await page.setViewportSize({ width: 1400, height: 600 });
  await page.locator('[data-ref="dashboardview"]').filter({hasText:'Listings'}).click();
  await page.waitForTimeout(2000);
  await page.locator('[data-ref="mylistingmanager"]').waitFor({state:'visible'});
  await page.waitForTimeout(2000);
  await page.locator('[data-ref="mylistingmanager"]').click({ force: true });
  await page.waitForTimeout(2000);
  //await page.pause();
  await page.locator('[class="icon-book"]').nth(0).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button').filter({hasText: 'Property Marketing'}).click();
  await page.locator('[class="icon-4x icon-arrow-right"]').nth(0).waitFor({state:'visible'});
 await page.locator('[class="icon-4x icon-arrow-right"]').nth(0).click();
 await page.waitForTimeout(10000);
 if(await page.getByRole('button').filter ({hasText:'Discard'}).isVisible()){
 await page.getByRole('button').filter ({hasText:'Discard'}).click();
 }
 const Template = await page.$$('[class="js-thumbnails-wrapper thumbnails-wrapper email-options"] [class="btn btn-green btn-preview js-preview"]')
 const Description = await page.$$('[class="js-thumbnails-wrapper thumbnails-wrapper email-options"] [class="js-name theme-title"]')
 console.log(Template.length);
for (let i=0; i<Template.length;i++)
{
  let tempdesciption= await Description[i].textContent();
 await Template[i].click();
 await expect(page.getByText(`Preview - ${tempdesciption}`)).toBeVisible();
}
 await page.locator('[class="row wrap-theme"]  [type="button"][subject="Virtual Tour"]').filter({hasText:'Select'}).click();
 await page.waitForTimeout(5000);
 await page.getByRole('button', { name: 'Send Email' }).click();
 //await page.getByText('Send Email').click();
 await expect(page.locator('html')).toBeVisible();
 await page.waitForTimeout(25000);
 const gettotalemails = await page.$$('[class="source tagsinput tab-pane c-recipients-idcontacts"] [class="add"]');
    console.log(gettotalemails.length);
    let counts=1;
  for (let i=0; i<gettotalemails.length && counts<4;i++)
  {
    await gettotalemails[i].click();
   counts=counts + 1;
   console.log(counts);
  }
  //await page.pause();
  await page.waitForTimeout(2000);
  await page.locator('[class="btn wizard-next js-help-target btn-blue"]').waitFor({state:'visible'});
  await page.waitForTimeout(2000);
  await page.locator('[class="btn wizard-next js-help-target btn-blue"]').click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Next')).toBeVisible();
  await page.locator('[class="btn wizard-next js-help-target btn-blue"]').click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('Next')).toBeVisible();
  await page.locator('[class="btn wizard-next js-help-target btn-blue"]').click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('Send').nth(-1)).toBeVisible();
  await page.locator('[class="btn wizard-next js-help-target btn-green"]').click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('Success')).toBeVisible();
  await page.pause();
 //await page.locator('[class="icon-4x icon-arrow-right"]').nth(0).click();
  //await page.locator('[class="icheck"][type="checkbox"]').nth(0).click();
  //await page.locator('[class="odd"] [tabindex="0"]').nth(0).click();
  //await page.waitForTimeout(10000);
})










test ('SingleListingcheckSocialmediaMarketing',async({page})=>{
  await page.goto('https://crm-dev.gabriels.net//impersonate.aspx?token=82CEC0B6-EB18-4DD0-A1CA-074174E1D814');
  await page.setViewportSize({ width: 1400, height: 600 });
  await page.locator('[data-ref="dashboardview"]').filter({hasText:'Listings'}).click();
  await page.waitForTimeout(2000);
  await page.locator('[data-ref="mylistingmanager"]').waitFor({state:'visible'});
  await page.waitForTimeout(2000);
  await page.locator('[data-ref="mylistingmanager"]').click({ force: true });
  await page.waitForTimeout(2000);
  //await page.pause();
  await page.locator('[class="icon-book"]').nth(0).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button').filter({hasText: 'Property Marketing'}).click();
  await page.pause();
  const threemarketing = await page.$$('[title="Next"]');
  console.log(threemarketing.length);
  //let counts=1;
 // await page.pause();
for (let i=0; i<threemarketing.length;i++)
{
  //await page.pause();
  const getthreemarketing = await threemarketing[i].textContent();
  if(getthreemarketing.includes('Social Media Marketing'))
  {
    await page.locator('[class="icon-4x icon-arrow-right"]').nth(i).click();
    break;
  }
  console.log(getthreemarketing);
 //counts=counts + 1;
// console.log(counts);
}
 //await page.locator('[class="icon-4x icon-arrow-right"]').nth(1).waitFor({state:'visible'});
 //await page.locator('[class="icon-4x icon-arrow-right"]').nth(1).click();
 await page.waitForTimeout(10000);
 if(await page.getByRole('button').filter ({hasText:'Discard'}).isVisible()){
 await page.getByRole('button').filter ({hasText:'Discard'}).click();
 }
 const Template = await page.$$('[class="js-name theme-title"] [class="btn btn-green btn-preview js-preview"]')
 const Description = await page.$$('[class="js-help-target js-preview-name"]');
 console.log(Template.length);
for (let i=0; i<Template.length;i++)
{
  let tempdesciption= await Description[i].textContent();
 await Template[i].click();
 await expect(page.getByText(`Preview - ${tempdesciption}`)).toBeVisible();
}
//await page.locator('[class="btn btn-green btn-preview js-preview"]').click();
//await page.waitForTimeout(1000);
 await page.locator('[class="row wrap-theme"]  [type="button"][subject="Social Media - Open House"]').filter({hasText:'Select'}).click();
 await page.waitForTimeout(10000);
 await page.getByRole('button', { name: 'Save' }).click();
 //await page.getByText('Send Email').click();
 await expect(page.locator('html')).toBeVisible();
  await expect(page.getByText('Success')).toBeVisible();
  await page.pause();
})










test('soldListings',async({page})=>{
  await page.goto('https://crm-dev.gabriels.net//impersonate.aspx?token=82CEC0B6-EB18-4DD0-A1CA-074174E1D814');
  await page.setViewportSize({ width: 1000, height: 600 });
  await page.locator('[data-ref="dashboardview"]').filter({hasText:'Listings'}).click();
  await page.waitForTimeout(10000);
  await page.locator('[data-ref="soldlistingmanager"]').click({ force: true });
  await page.waitForTimeout(10000);
  const links = await page.$$('[class="icheck"][type="checkbox"]');
  console.log(links.length);
    let count=1;
    for (let i=1; i<links.length && count<4;i++)
  {
    await links[i].click();
    count=count + 1;
    console.log(count);
  }
  await page.getByText('Property Marketing').click();
 await page.pause();
 await page.locator('[class="arrow"]').nth(0).click();
 await page.locator('[class="row wrap-theme"]  [type="button"][subject="Open house - Multi Listing Template"]').filter({hasText:'Select'}).click();
 await page.getByText('Send Email').click();
})


test('allListings',async({page})=>{
  await page.goto('https://crm-dev.gabriels.net//impersonate.aspx?token=82CEC0B6-EB18-4DD0-A1CA-074174E1D814');
  await page.setViewportSize({ width: 1000, height: 600 });
  await page.locator('[data-ref="dashboardview"]').filter({hasText:'Listings'}).click();
  await page.waitForTimeout(10000);
  await page.locator('[data-ref="mlslistingmanager"]').click({ force: true });
  await page.waitForTimeout(10000);
  const links = await page.$$('[class="icheck"][type="checkbox"]');
  console.log(links.length);
    let count=1;
    for (let i=1; i<links.length && count<4;i++)
  {
    await links[i].click();
    count=count + 1;
    console.log(count);
  }
  await page.getByText('Property Marketing').click();
 await page.pause();
 await page.locator('[class="arrow"]').nth(0).click();
 await page.locator('[class="row wrap-theme"]  [type="button"][subject="Open house - Multi Listing Template"]').filter({hasText:'Select'}).click();
 await page.getByText('Send Email').click();
})
