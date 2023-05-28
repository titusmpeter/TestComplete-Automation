﻿function Test1()
{
  TestedApps.Orders.Run();
  Aliases.Orders.MainForm.Close();
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2ftestcomplete15%2fweborders%2fDefault.aspx");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageWebOrdersLogin;
  page.Wait();
  let form = page.formAspnetform;
  form.textboxUsername.SetText("Tester");
  form.panelUsername.Click();
  let passwordBox = form.passwordboxPassword;
  passwordBox.Click();
  passwordBox.Keys("![ReleaseLast]");
  passwordBox.SetText(Project.Variables.Password1);
  form.submitbuttonLogin.ClickButton();
  page = browser.pageSecureSmartbearsoftwareComSa;
  page.Wait();
  page.formAspnetform.textnodeCtl00Menu.linkOrder.Click();
  page = browser.pageProcess;
  page.Wait();
  form = page.formAspnetform;
  form.selectProduct.ClickItem("FamilyAlbum");
  form.textboxTotal.Click();
  let textbox = form.textboxDiscount;
  textbox.Click();
  form.labelQuantity.Click();
  form.textboxQuantity.SetText("20");
  textbox.Click();
  form.submitbuttonCalculate.ClickButton();
  textbox = form.textboxCustomerName;
  textbox.Click();
  textbox.SetText("Pst");
  textbox = form.textboxStreet;
  textbox.Click();
  textbox.SetText("Oxford");
  textbox = form.textboxCity;
  textbox.Click();
  textbox.SetText("Cambridge");
  textbox = form.textboxState;
  textbox.Click();
  textbox.SetText("MA");
  browser.wndChrome_WidgetWin_1.Click(7, 28);
  form.textboxZip.SetText("00300");
  form.cell.Click();
  form.radiobuttonMastercard.ClickButton();
  form.radiobuttonVisa.ClickButton();
  textbox = form.textboxCardNr;
  textbox.Click();
  textbox.Keys("8877665544");
  textbox = form.textboxExpireDateMmYy;
  textbox.Click();
  textbox.SetText("08/26");
  form.linkCtl00MaincontentFmworderInse.Click();
  page.Wait();
  form.textnodeCtl00Menu.linkViewAllOrders.Click();
}