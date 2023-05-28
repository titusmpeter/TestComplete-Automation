let browser;
let page;
let textbox;
let passwordBox;

function bitbarConnect()
{
var capabilities = [
  {"platform": "Windows", "osVersion": "11", "browserName": "Firefox", "version": "100", "resolution": "1280x1024" }, 
  {"platform": "Windows", "osVersion": "11", "browserName": "Microsoft Edge", "version": "101", "resolution": "1366x768" },
  {"platform": "Windows", "osVersion": "10", "browserName": "Internet Explorer", "version": "11", "resolution": "1024x768" }
  ];
var server = "https://us-west-desktop-hub.bitbar.com/wd/hub";

//for loop required to iterate over the array objects
for (var i=0; i<capabilities.length; i++){
Browsers.RemoteItem(server, capabilities[i]).Run("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders");
  login()
  makeOrder()
  delAndlogout()
  } //Executes in parallel. Find a workaround to run in sequence, one array object after the other
}

function login()
{
 // Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete15%2fWebOrders%2fDefault.aspx");
  browser = Sys.Browser();
  browser.BrowserWindow(0).Maximize();
  page = browser.Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*");
  page.FindElement("//body[contains(., 'Username:')]").Keys("[Enter]");
  page.Wait();
  textbox = page.FindElement("//input[@id=(//label[.='Username:']/@for)]");
  textbox.Click();
  textbox.SetText("tester");
  passwordBox = page.FindElement("//input[@id=(//label[.='Password:']/@for)]");
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.password2);
  page.FindElement("#ctl00_MainContent_login_button").ClickButton();
  page.Wait();
  aqObject.CheckProperty(Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/").FindElement("//div[contains(text(), 'Welcome, tester!')]"), "contentText", cmpEqual, "Welcome, tester!\n|\nLogout");
  page.Wait();
}
  
function makeOrder()
{  
  page.FindElement("//a[.='Order']").Click();
  page.Wait();
  page.FindElement("//select[@id=(//label[.='Product:*']/@for)]").ClickItem("ScreenSaver");
  textbox = page.FindElement("//input[@id=(//label[.='Quantity:*']/@for)]");
  textbox.Click();
  textbox.SetText("10");
  page.FindElement("//input[@value='Calculate']").ClickButton();
  textbox = page.FindElement("//input[@id=(//label[.='Customer name:*']/@for)]");
  textbox.Click();
  textbox.SetText("Zack");
  textbox = page.FindElement("//input[@id=(//label[.='Street:*']/@for)]");
  textbox.Click();
  textbox.SetText("1600");
  textbox = page.FindElement("//input[@id=(//label[.='City:*']/@for)]");
  textbox.Click();
  textbox.SetText("Washington");
  textbox = page.FindElement("//input[@id=(//label[.='State:']/@for)]");
  textbox.Click();
  textbox.SetText("DC");
  textbox = page.FindElement("//input[@id=(//label[.='Zip:*']/@for)]");
  textbox.Click();
  textbox.SetText("00100");
  //browser.Window("Chrome_WidgetWin_1").Click(142, 7);
  page.FindElement("//div[contains(@class, 'buttons_process')]").Click();
  page.FindElement("//input[@id=(//label[.='American Express']/@for)]").ClickButton();
  textbox = page.FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]");
  textbox.Click();
  textbox.SetText("8877665544");
  textbox = page.FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]");
  textbox.Click();
  textbox.SetText("10/25");
  page.FindElement("#ctl00_MainContent_fmwOrder_InsertButton").Click();
  page.Wait();
  aqObject.CheckProperty(Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//strong[contains(text(), 'New order has been successfully added.')]"), "contentText", cmpEqual, "New order has been successfully added.");
  //page.FindElement("//a[.='View all Orders']").Click();
  page.Wait();
}

function delAndlogout() 
{
  page.FindElement("//a[.='View all orders']").Click();
  page.Wait();
  page.FindElement("#ctl00_MainContent_orderGrid_ctl02_OrderSelector").ClickChecked(true);
  page.FindElement("#ctl00_MainContent_btnDelete").ClickButton();
  page.Wait();
  page.FindElement("#ctl00_logout").Click();
  aqObject.CheckProperty(Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").FindElement("//div[contains(., 'Username:')]"), "contentText", cmpEqual, "Username:\nPassword:\nIn order to log in Orders sample use the following information:\nUsername - Tester\nPassword - test\nwindow.onload = function() { document.getElementById(\"ctl00_MainContent_username\").focus(); }");
}