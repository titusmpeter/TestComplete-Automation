function bitbarConnect() {
var capabilities = {
  "platform": "Windows", 
  "osVersion": "11", 
  "browserName": "Microsoft Edge", 
  "version": "106", 
  "resolution": "1280x800"
  };
var server = "https://eu-desktop-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://detegoglobal.com");

Test1()
}

function Test1()
{
  //Browsers.Item(btEdge).Navigate("https://detegoglobal.com/");
  let browser = Sys.Browser();
  browser.BrowserWindow(0).Maximize();
  let page = browser.Page("https://detegoglobal.com/");
  page.Wait();
  page.FindElement("//a[.='Resources']").Click();
  page.Wait();
  page.FindElement("//div[2]/div/div[2]/h2/a").Click();
  page.Wait();
  page.FindElement("//a[contains(text(), 'Get in touch')]").Click();
  page.Wait();
  let textbox = page.FindElement("//input[@id=(//label[contains(.,'Full Name')]/@for)]");
  textbox.Click();
  textbox.SetText("Jane");
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Organisation Name')]/@for)]");
  textbox.Click();
  textbox.SetText("Doe");
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Job Title')]/@for)]");
  textbox.Click();
  textbox.SetText("Engineer");
  let emailInput = page.FindElement("//input[@id=(//label[contains(.,'Business Email Address')]/@for)]");
  emailInput.Click();
  emailInput.SetText("jane@mybusiness.com");
  page.FindElement("//select[@id=(//label[contains(.,'Country')]/@for)]").ClickItem("Afghanistan");
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Phone Number')]/@for)]");
  textbox.Click();
  textbox.SetText("88776655");
  page.FindElement("//select[@id=(//label[contains(.,'How did you Hear about Detego')]/@for)]").ClickItem("Online Search");
  let checkbox = page.FindElement("//input[@id=(//label[.='Career Enquiry']/@for)]");
  checkbox.ClickChecked(true);
  page.FindElement("//input[@id=(//label[.='Training Enquiry']/@for)]").ClickChecked(true);
  checkbox.ClickChecked(false);
}