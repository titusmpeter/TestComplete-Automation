function Test1()
{
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let form = browser.pageProcess.formAspnetform;
  form.radiobuttonMastercard.ClickButton();
  form.radiobuttonVisa.ClickButton();
  let textbox = form.textboxCardNr;
  textbox.Click();
  textbox.Keys("4444555556666");
  textbox = form.textboxExpireDateMmYy;
  textbox.Click();
  textbox.Keys("10/25");
  form.linkCtl00MaincontentFmworderInse.Click();
}

function Test2()
{
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/testcomplete15/weborders/Process.aspx");
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browserWindow.Maximize();
  let form = browser.pageProcess.formAspnetform;
  form.textnodeState.Click();
  form.textnodeViewAllOrders.linkViewAllOrders.Click();
  browserWindow.Close();
}