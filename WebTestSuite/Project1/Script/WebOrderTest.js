﻿let browser;
let form;
let textbox;
let passwordBox;
let page;

function WebOrderTest()
{
  login();
  makeOrder();
  deleteAndlogout();
}

function login()
{
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete15%2fWebOrders%2fDefault.aspx");
  browser = Aliases.browser;
  form = browser.pageWebOrdersLogin.formAspnetform;
  textbox = form.textboxUsername;
  textbox.SetText("tester");
  textbox.Keys("[Tab]");
  passwordBox = form.passwordboxPassword;
  passwordBox.SetText(Project.Variables.mypassword);
  passwordBox.Keys("[Enter]");
  page = browser.pageSecureSmartbearsoftwareComSa;
  page.Wait();
  //browser.wndChrome_WidgetWin_1.Close();
  aqObject.CheckProperty(Aliases.browser.pageSecureSmartbearsoftwareComSa.formAspnetform.panelWelcomeTester, "contentText", cmpEqual, "Welcome, tester!\n|\nLogout");
}

function makeOrder()
{
  page.formAspnetform.linkOrder.Click();
  page = browser.pageProcess;
  page.Wait();
  form = page.formAspnetform;
  form.selectProduct.ClickItem("ScreenSaver");
  textbox = form.textboxQuantity;
  textbox.Click(18, 8);
  textbox.SetText("3");
  form.submitbuttonCalculate.ClickButton();
  textbox = form.textboxCustomerName;
  textbox.Click(48, 7);
  textbox.SetText("Jane");
  textbox.Keys("[Tab]");
  textbox = form.textboxStreet;
  textbox.SetText("Doe");
  textbox.Keys("[Tab]");
  textbox = form.textboxCity;
  textbox.SetText("London");
  textbox.Keys("[Tab]");
  textbox = form.textboxState;
  textbox.SetText("Ontario");
  textbox.Keys("[Tab]");
  textbox = form.textboxZip;
  textbox.SetText("00100");
  textbox.Keys("[Tab]");
  form.radiobuttonAmericanExpress.ClickButton();
  textbox = form.textboxCardNr;
  textbox.Click(69, 13);
  textbox.SetText("4444555556666");
  textbox = form.textboxExpireDateMmYy;
  textbox.Click(13, 10);
  textbox.SetText("10/24");
  //textbox.Keys("[Enter]");
  form.linkProcess.Click(0,0);
  page.Wait();
  aqObject.CheckProperty(Aliases.browser.pageProcess.formAspnetform.textnodeNewOrderHasBeenSuccessfu, "contentText", cmpEqual, "New order has been successfully added.");
  form.linkViewAllOrders.Click();
  page = browser.pageDefault;
  page.Wait();
  form = page.formAspnetform;
}
  
function deleteAndlogout()
{
  form.checkboxOrderselector.ClickChecked(true);
  form.submitbuttonDeleteSelected.ClickButton();
  page.Wait();
  form.linkLogout.Click();
}