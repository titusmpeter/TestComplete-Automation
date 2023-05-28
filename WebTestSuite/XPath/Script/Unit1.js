function WebOrder()
{
  Browsers.RemoteItem["https://us-west-desktop-hub.bitbar.com/wd/hub", "{\"platform\":\"Windows\",\"osVersion\":\"11\",\"browserName\":\"Firefox\",\"version\":\"105\",\"resolution\":\"1366x768\"}"].Run("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders");
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete15%2fWebOrders%2fDefault.aspx");
  //Maximizes the specified Window object.
  Sys.Browser().BrowserWindow(0).Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").Wait();
  //Clicks the 'FindElement("//input[@id=(//label[.='Username:']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").FindElement("//input[@id=(//label[.='Username:']/@for)]").Click();
  //Sets the text 'tester' in the 'FindElement("//input[@id=(//label[.='Username:']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").FindElement("//input[@id=(//label[.='Username:']/@for)]").SetText("tester");
  //Clicks the 'FindElement("//input[@id=(//label[.='Password:']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").FindElement("//input[@id=(//label[.='Password:']/@for)]").Click();
  //Sets the text Project.Variables.Password1 in the 'FindElement("//input[@id=(//label[.='Password:']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").FindElement("//input[@id=(//label[.='Password:']/@for)]").SetText(Project.Variables.Password1);
  //Clicks the 'FindElement("#ctl00_MainContent_login_button")' button.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").FindElement("#ctl00_MainContent_login_button").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/").Wait();
  //Check whether '*Welcome, tester*' matches the text optically recognized in the image Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/").FindElement("//div[contains(text(), 'Welcome, tester!')]").
  OCR.Recognize(Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/").FindElement("//div[contains(text(), 'Welcome, tester!')]")).CheckText("*Welcome, tester*");
  //Clicks the 'FindElement("//a[.='Order']")' link.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/").FindElement("//a[.='Order']").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").Wait();
  //Selects the 'ScreenSaver' item of the 'FindElement("//select[@id=(//label[.='Product:*']/@for)]")' combo box.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//select[@id=(//label[.='Product:*']/@for)]").ClickItem("ScreenSaver");
  //Clicks the 'FindElement("//input[@id=(//label[.='Quantity:*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Quantity:*']/@for)]").Click();
  //Sets the text '10' in the 'FindElement("//input[@id=(//label[.='Quantity:*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Quantity:*']/@for)]").SetText("10");
  //Clicks the 'FindElement("//input[@id=(//label[.='Discount:']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Discount:']/@for)]").Click();
  //Clicks the 'FindElement("//li[contains(., 'Discount:')]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//li[contains(., 'Discount:')]").Click();
  //Clicks the 'FindElement("//input[@value='Calculate']")' button.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@value='Calculate']").ClickButton();
  //Clicks the 'FindElement("//input[@id=(//label[.='Customer name:*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Customer name:*']/@for)]").Click();
  //Sets the text 'Will' in the 'FindElement("//input[@id=(//label[.='Customer name:*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Customer name:*']/@for)]").SetText("Will");
  //Clicks the 'FindElement("//input[@id=(//label[.='Street:*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Street:*']/@for)]").Click();
  //Sets the text 'Smith' in the 'FindElement("//input[@id=(//label[.='Street:*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Street:*']/@for)]").SetText("Smith");
  //Clicks the 'FindElement("//input[@id=(//label[.='City:*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='City:*']/@for)]").Click();
  //Sets the text 'Miami' in the 'FindElement("//input[@id=(//label[.='City:*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='City:*']/@for)]").SetText("Miami");
  //Clicks the 'FindElement("//input[@id=(//label[.='State:']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='State:']/@for)]").Click();
  //Sets the text 'Fl' in the 'FindElement("//input[@id=(//label[.='State:']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='State:']/@for)]").SetText("Fl");
  //Clicks the 'FindElement("//input[@id=(//label[.='Zip:*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Zip:*']/@for)]").Click();
  //Sets the text '00900' in the 'FindElement("//input[@id=(//label[.='Zip:*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Zip:*']/@for)]").SetText("00900");
  //Clicks the 'FindElement("//input[@id=(//label[.='American Express']/@for)]")' radio button.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='American Express']/@for)]").ClickButton();
  //Clicks the 'FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]").Click();
  //Sets the text '8877665522' in the 'FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Card Nr:*']/@for)]").SetText("8877665522");
  //Clicks the 'FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]")' control.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]").Click();
  //Sets the text '10/26' in the 'FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]")' text editor.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//input[@id=(//label[.='Expire date (mm/yy):*']/@for)]").SetText("10/26");
  //Clicks the 'FindElement("//a[.='View all orders']")' link.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/").FindElement("//a[.='View all orders']").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").Wait();
  //Check whether '*New order has been successfully added*' matches the text optically recognized in the image Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//strong[contains(text(), 'New order has been successfully added.')]").
  OCR.Recognize(Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx").FindElement("//strong[contains(text(), 'New order has been successfully added.')]")).CheckText("*New order has been successfully added*");
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Default.aspx").Wait();
  //Sets the state of the 'FindElement("#ctl00_MainContent_orderGrid_ctl02_OrderSelector")' checkbox to True.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Default.aspx").FindElement("#ctl00_MainContent_orderGrid_ctl02_OrderSelector").ClickChecked(true);
  //Clicks the 'FindElement("#ctl00_MainContent_btnDelete")' button.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Default.aspx").FindElement("#ctl00_MainContent_btnDelete").ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Default.aspx").Wait();
  //Clicks the 'FindElement("#ctl00_logout")' link.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Default.aspx").FindElement("#ctl00_logout").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Sys.Browser().Page("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx*").Wait();
}