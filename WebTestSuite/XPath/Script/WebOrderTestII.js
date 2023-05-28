let browser;
let page;
let textbox;
let passwordBox;

function WebOrderTestII()
{
 login(); 
 createOrder();
 delAndlogout();
}

function login()
{
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete15%2fWebOrders%2fDefault.aspx");
  browser = Sys.Browser();
  browser.BrowserWindow(0).Maximize();
  page = browser.Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*");
  page.FindElement("//input[@id=(//label[.='Username:']/@for)]").Keys("[Enter]");
  page.Wait();
  textbox = page.FindElement("//input[@id=(//label[.='Username:']/@for)]");
  textbox.Keys("![ReleaseLast]");
  textbox.SetText("tester");
  textbox.Keys("[Tab]");
  passwordBox = page.FindElement("//input[@id=(//label[.='Password:']/@for)]");
  passwordBox.SetText(Project.Variables.Password1);
  passwordBox.Keys("[Enter]");
  page.Wait();
  aqObject.CheckProperty(page.FindElement("//div[contains(text(), 'Welcome, tester!')]"), "contentText", cmpEqual, "Welcome, tester!\n|\nLogout");
  page.FindElement("//a[.='Order']").Click();
  page.Wait();
}

function createOrder() 
{
  page.FindElement("//select[@id=(//label[.='Product:*']/@for)]").ClickItem("FamilyAlbum");
  textbox = page.FindElement("//input[@id=(//label[.='Quantity:*']/@for)]");
  textbox.Click();
  textbox.SetText("3");
  textbox = page.FindElement("//input[@id=(//label[.='Discount:']/@for)]");
  textbox.Click();
  textbox.SetText("4");
  page.FindElement("//input[@value='Calculate']").ClickButton();
  textbox = page.FindElement("//input[@id=(//label[.='Customer name:*']/@for)]");
  textbox.Click();
  textbox.Keys("[Up]");
  textbox.SetText("Jayne");
  textbox.Keys("[Tab]");
  textbox = page.FindElement("//input[@id=(//label[.='Street:*']/@for)]");
  textbox.SetText("Dae");
  textbox.Keys("[Tab]");
  textbox = page.FindElement("//input[@id=(//label[.='City:*']/@for)]");
  textbox.SetText("Brighton");
  textbox.Keys("[Tab]");
  textbox = page.FindElement("//input[@id=(//label[.='State:']/@for)]");
  textbox.SetText("Hove");
  textbox.Keys("[Tab]");
  textbox = page.FindElement("//input[@id=(//label[.='Zip:*']/@for)]");
  textbox.SetText("00200");
  textbox.Keys("[Tab]");
  page.FindElement("//input[@id=(//label[.='MasterCard']/@for)]").ClickButton();
  textbox = page.FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]");
  textbox.Click();
  textbox.SetText("222244446666");
  textbox = page.FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]");
  textbox.Click();
  textbox.SetText("10/25");
  page.FindElement("#ctl00_MainContent_fmwOrder_InsertButton").Click();
  page.Wait();
  aqObject.CheckProperty(page.FindElement("//strong[contains(text(), 'New order has been successfully added.')]"), "contentText", cmpEqual, "New order has been successfully added.");
  page.FindElement("//a[.='View all orders']").Click();
  page.Wait();
}  
  
function delAndlogout()
{
  page.FindElement("#ctl00_MainContent_orderGrid_ctl02_OrderSelector").ClickChecked(true);
  page.FindElement("#ctl00_MainContent_btnDelete").ClickButton();
  page.Wait();
  page.FindElement("#ctl00_logout").Click();
}