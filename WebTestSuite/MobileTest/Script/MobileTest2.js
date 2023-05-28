function bitbarConnect() {
var capabilities = {
  "platformName": "ANDROID", 
  "bitbar_target": "android", 
  "bitbar_findDevice": "true", 
  "bitbar_device": "Samsung Galaxy A52 -US", 
  "deviceName": "Samsung Galaxy A52 -US", 
  "automationName": "UiAutomator2", 
  "bitbar_app": "172022952"
  };
var server = "https://appium.bitbar.com/wd/hub/";
Mobile.ConnectDevice(server, capabilities);

}



function Test1()
{
  var capabilities = {
    "automationName": "UiAutomator2", 
    "bitbar_app": "172022952", 
    "bitbar_device": "Google Pixel 3a Android 12", 
    "bitbar_findDevice": "true", 
    "bitbar_target": "android", 
    "deviceName": "Google Pixel 3a Android 12", 
    "platformName": "ANDROID"
  };
  var server = "https://appium.bitbar.com/wd/hub/";
  Mobile.ConnectDevice(server, capabilities, 600);
  let device = Mobile.Device();
  let processSmartbearExampleOrders = device.Process("smartbear.example.orders");
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/newButton").Touch();
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/select_product").Touch();
  processSmartbearExampleOrders.FindElementByXPath("//*[@text=\"FamilyAlbum\"]").Touch();
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/edit_quant").Touch();
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/edit_quant").Keys("10");
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/cust_name").Touch();
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/cust_name").Keys("Jayne");
  device.PressButton(mbkEnter);
  let editTextStreet = processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/street");
  editTextStreet.Keys("1st Street");
  device.PressButton(mbkEnter);
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/city").Keys("Rio");
  device.PressButton(mbkEnter);
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/state").Keys("Brazil");
  device.PressButton(mbkEnter);
  device.PressButton(mbkEnter);
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/radioButton_Visa").Touch();
  processSmartbearExampleOrders.FindElementByXPath("//*[*[@text=\"7480\"]]").Touch();
  device.PressButton(mbkEnter);
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/radioButton_MC").Touch();
  processSmartbearExampleOrders.FindElementByXPath("//*[*[@text=\"7480\"]]").Touch();
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/radioButton_MC").Touch();
  device.PressButton(mbkEnter);
  processSmartbearExampleOrders.FindElementByXPath("//android.widget.FrameLayout/android.widget.LinearLayout").Touch();
  processSmartbearExampleOrders.FindElementById("smartbear.example.orders:id/radioButton_MC").Touch();
  device.PressButton(mbkEnter);
  processSmartbearExampleOrders.FindElementByXPath("//*[*[@text=\"7480\"]]").Touch();
  device.PressButton(mbkEnter);
  device.Swipe(245, 2141, 236, 2131, 10, 100);
}