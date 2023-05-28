function main()
{
  bitbarConnect()
  Test1()
}

function bitbarConnect()
{
  var capabilities = {
	'platformName': 'Windows', 'browserName': 'firefox', 'browserVersion': '105', 'bitbar:options': {
		'apiKey': 'LTFLnDWhOAwUS9b7Ix92lf4fZKrIHcv7', 'resolution': '1280x1024', 'osVersion': '11', 
    },
	'bitbar_project': 'Automated_Tests',
	'bitbar_testrun': 'Test_1',
  }
  var server = "https://us-west-desktop-hub.bitbar.com/wd/hub";
  Browsers.RemoteItem(server, capabilities).Run("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders");
}

function Test1()
{
 // Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete15%2fWebOrders%2fDefault.aspx");
  let browser = Sys.Browser();
  browser.BrowserWindow(0).Maximize();
  let page = browser.Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*");
  let textbox = page.FindElement("//input[@id=(//label[.='Username:']/@for)]");
  textbox.Click();
  textbox.SetText("tester");
  let passwordBox = page.FindElement("//input[@id=(//label[.='Password:']/@for)]");
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  page.FindElement("#ctl00_MainContent_login_button").ClickButton();
  page.Wait();
  page.FindElement("//a[.='View all products']").Click();
  page.Wait();
  page.FindElement("//a[.='Order']").Click();
  page.Wait();
  textbox = page.FindElement("//input[@id=(//label[.='Quantity:*']/@for)]");
  textbox.Click();
  textbox.SetText("10");
  textbox.Keys("[Tab]");
  page.FindElement("//input[@id=(//label[.='Price per unit:']/@for)]").Keys("[Tab]");
  page.FindElement("//input[@value='Calculate']").ClickButton();
  textbox = page.FindElement("//input[@id=(//label[.='Customer name:*']/@for)]");
  textbox.Click();
  textbox.SetText("kev");
  textbox = page.FindElement("//input[@id=(//label[.='Street:*']/@for)]");
  textbox.Click();
  textbox.SetText("debryne");
  textbox = page.FindElement("//input[@id=(//label[.='City:*']/@for)]");
  textbox.Click();
  textbox.SetText("hague");
  textbox = page.FindElement("//input[@id=(//label[.='State:']/@for)]");
  textbox.Click();
  textbox.SetText("holland");
  textbox = page.FindElement("//input[@id=(//label[.='Zip:*']/@for)]");
  textbox.Click();
  textbox.SetText("00400");
  page.FindElement("//input[@id=(//label[.='MasterCard']/@for)]").ClickButton();
  textbox = page.FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]");
  textbox.Click();
  textbox.SetText("9988776655");
  textbox = page.FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]");
  textbox.Click();
  textbox.SetText("12/25");
  page.FindElement("#ctl00_MainContent_fmwOrder_InsertButton").Click();
  page.Wait();
  page.FindElement("//a[.='View all orders']").Click();
  OCR.Recognize(Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Default.aspx").FindElement("//div[contains(., 'List of All Orders')]")).CheckText("*kev*");
}