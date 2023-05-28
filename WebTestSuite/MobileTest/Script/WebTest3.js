let browser;
let page;
let emailInput;
let textbox;

function bitbarConnect() 
{
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
  browser = Sys.Browser();
  browser.BrowserWindow(0).Maximize();
  page = browser.Page("https://detegoglobal.com/");
  page.Wait();
  page.FindElement("//a[.='About']").Click();
  page.FindElement("//nav/ul/li[2]/a/span[contains(@class, 'sub-arrow')]").Click();
  page.FindElement("//a[.='Careers']").Click();
  page.Wait();
  page.FindElement("//a[.='Contact Us']").Click();
  page.Wait();
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Full Name')]/@for)]");
  textbox.Click();
  textbox.SetText("Key");
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Organisation Name')]/@for)]");
  textbox.Click();
  textbox.SetText("Value");
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Job Title')]/@for)]");
  textbox.Click();
  textbox.SetText("DF Consultant");
  emailInput = page.FindElement("//input[@id=(//label[contains(.,'Business Email Address')]/@for)]");
  emailInput.Click();
  emailInput.SetText("keyvalue@myjob.com");
  page.FindElement("//select[@id=(//label[contains(.,'Country')]/@for)]").ClickItem("Barbados");
  textbox = page.FindElement("//input[@id=(//label[contains(.,'Phone Number')]/@for)]");
  textbox.Click();
  textbox.SetText("+12233445566");
  page.FindElement("//select[@id=(//label[contains(.,'How did you Hear about Detego')]/@for)]").ClickItem("Trade Show / Event");
  page.FindElement("//input[@id=(//label[.='Product Enquiry']/@for)]").ClickChecked(true);
  page.Wait();
}