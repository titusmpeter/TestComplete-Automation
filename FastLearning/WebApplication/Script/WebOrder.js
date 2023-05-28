let browser;
let page;
let form
let textbox;
let password;

function webOrder()
{
  login()
  makeOrder()
  validateCheckPoints()
}

function login()
{
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete15%2fWebOrders%2fDefault.aspx");
  browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  page = browser.pageLogin;
  page.Wait();
  form = page.formAspnetform;
  textbox = form.textboxUsername;
  textbox.SetText("tester");
  passwordBox = form.passwordboxPassword;
  passwordBox.SetText(Project.Variables.Password1);
  form.submitbuttonLogin.ClickButton();
  page = browser.pageSecureSmartbearsoftwareComSa;
  page.Wait();
  Tables.panelListOfAllOrders.Check();
  page.formAspnetform.textnodeViewAllOrders.linkOrder.Click();
  page = browser.pageProcess;
  page.Wait(); 
  
}
  
function makeOrder()
{
  form = page.formAspnetform;
  form.selectProduct.ClickItem("FamilyAlbum");
  textbox = form.textboxQuantity;
  textbox.SetText("10");
  form.textboxDiscount.Click();
  form.submitbuttonCalculate.ClickButton();
  textbox = form.textboxCustomerName;
  textbox.SetText("James");
  textbox = form.textboxStreet;
  textbox.SetText("16PA");
  textbox = form.textboxCity;
  textbox.SetText("Tampa");
  textbox = form.textboxState;
  textbox.SetText("FL");
  textbox = form.textboxZip;
  textbox.SetText("0030");
  form.radiobuttonMastercard.ClickButton();
  textbox = form.textboxCardNr;
  textbox.SetText("4488904455");
  textbox = form.textboxExpireDateMmYy;
  textbox.SetText("10/26");
  form.linkCtl00MaincontentFmworderInse.Click();
  page.Wait();
}  
  
function validateCheckPoints()
{
  OCR.Recognize(Aliases.browser.pageProcess.FindElement("//strong[contains(text(), 'New order has been successfully added.')]")).CheckText("*New order has been successfully added*");
  form.textnodeViewAllOrders.linkViewAllOrders.Click();
  page = browser.pageDefault;
  page.Wait();
  Tables.panelListOfAllOrders1.Check();
  page.formAspnetform.linkLogout.Click();
  browser.Close();
}

