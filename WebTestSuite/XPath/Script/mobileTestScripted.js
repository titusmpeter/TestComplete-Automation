function mobileTestScripted()
{
  //Connect to BitBar device "Google Pixel 3a Android 12".
  Mobile.ConnectDevice("https://appium.bitbar.com/wd/hub/", "{\"automationName\":\"UiAutomator2\",\"bitbar_app\":\"171703292\",\"bitbar_device\":\"Google Pixel 3a Android 12\",\"bitbar_findDevice\":true,\"bitbar_target\":\"android\",\"deviceName\":\"Google Pixel 3a Android 12\",\"platformName\":\"ANDROID\"}", 600);
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/newButton").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/select_product").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementByXPath("//*[@text=\"FamilyAlbum\"]").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/edit_quant").Touch();
  //Simulates keypresses on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/edit_quant").Keys("0");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/cust_name").Touch();
  //Simulates keystrokes on the device.
  Mobile.Device().Keys("Jonon");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/street").Touch();
  //Simulates keypresses on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/street").Keys("Begood");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/street").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/city").Touch();
  //Simulates keypresses on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/city").Keys("Ocho");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/state").Touch();
  //Simulates keypresses on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/state").Keys("Rios");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/radioButton_AE").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/card_number").Touch();
  //Simulates keystrokes on the device.
  Mobile.Device().Keys("11223344223344");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/exp_date").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementByXPath("//android.widget.FrameLayout/android.widget.LinearLayout").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementByXPath("//android.widget.FrameLayout/android.widget.LinearLayout").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementByXPath("//android.widget.FrameLayout/android.widget.LinearLayout").Touch();
  //Simulates keypresses on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/exp_date").Keys("25");
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/button_setdata").Touch();
  //Simulates a touch on the view.
  Mobile.Device().Process("smartbear.example.orders").FindElementById("smartbear.example.orders:id/button_ok").Touch();
  //Check whether '*Jon*' matches the text optically recognized in the image Mobile.Device().Process("smartbear.example.orders").FindElementByXPath("//*[@text=\"Jon\"]").
  OCR.Recognize(Mobile.Device().Process("smartbear.example.orders").FindElementByXPath("//*[@text=\"Jon\"]")).CheckText("*Jon*");
}