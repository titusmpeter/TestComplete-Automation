let browser;
let browserWindow;
let page;
let textbox;
let form;
let passwordBox;
let submitButton;

function webOrder()
{
  login()
  makeOrder()
  validateCheckPoints()
}

function login()
{
  Browsers.Item(btEdge).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete15/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2ftestcomplete15%2fweborders%2fDefault.aspx");
  browser = Aliases.browser;
  browserWindow = browser.BrowserWindow;
  browserWindow.Maximize();
  page = browser.pageLogin;
  page.Wait();
  form = page.formAspnetform;
  textbox = form.textboxUsername;
  textbox.SetText("Tester");
  passwordBox = form.passwordboxPassword;
  passwordBox.SetText(Project.Variables.Password2);
  //passwordBox.Keys("[Enter]");
  browser.pageLogin.formAspnetform.submitbuttonLogin.ClickButton();
  page = browser.pageSecureSmartbearsoftwareComSa;
  page.Wait();
 }
 
function makeOrder()
{  
  Tables.panelListOfAllOrders.Check();
  page.formAspnetform.textnodeViewAllOrders.linkOrder.Click();
  page = browser.pageProcess;
  page.Wait();
  form = page.formAspnetform;
  form.selectProduct.ClickItem("ScreenSaver");
  textbox = form.textboxQuantity;
  textbox.Click();
  textbox.SetText("10");
  textbox = form.textboxDiscount;
  textbox.Click();
  textbox.SetText("5");
  submitButton = form.submitbuttonCalculate;
  submitButton.ClickButton();
  textbox = form.textboxCustomerName;
  textbox.SetText("Pau");
  textbox = form.textboxStreet;
  textbox.SetText("OX st");
  textbox = form.textboxCity;
  textbox.SetText("London");
  textbox = form.textboxState;
  textbox.SetText("Mayfair");
  textbox = form.textboxZip;
  textbox.SetText("0016");
  form.radiobuttonAmericanExpress.ClickButton();
  form.radiobuttonMastercard.ClickButton();
  textbox = form.textboxCardNr;
  textbox.SetText("2288442211");
  textbox = form.textboxExpireDateMmYy;
  textbox.SetText("12/25");
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
  browserWindow.Close();
}

