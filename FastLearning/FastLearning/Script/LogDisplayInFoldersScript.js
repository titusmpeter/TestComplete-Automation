function LogDisplayInFolders()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  Project.Variables.Loop11.Reset();
  for(; !Project.Variables.Loop11.IsEOF();)
  {
    //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder(Project.Variables.Loop11.Value("Customer Name"), "");
    //Moves the mouse cursor to the menu item specified and then simulates a single click.
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    //Clicks the 'Customer' object.
    Aliases.Orders.OrderForm.Group.Customer.Click(31, 8);
    //Enters the text KeywordTests.LogDisplayInFolders.Variables.Loop1("Customer Name") in the 'Customer' text editor.
    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.Loop11.Value("Customer Name"));
    //Clicks the 'Street' object.
    Aliases.Orders.OrderForm.Group.Street.Click(10, 4);
    //Enters the text KeywordTests.LogDisplayInFolders.Variables.Loop1("Street") in the 'Street' text editor.
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.Loop11.Value("Street"));
    //Clicks the 'City' object.
    Aliases.Orders.OrderForm.Group.City.Click(31, 13);
    //Enters the text KeywordTests.LogDisplayInFolders.Variables.Loop1("City") in the 'City' text editor.
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.Loop11.Value("City"));
    //Clicks the 'State' object.
    Aliases.Orders.OrderForm.Group.State.Click(66, 12);
    //Enters the text KeywordTests.LogDisplayInFolders.Variables.Loop1("State") in the 'State' text editor.
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.Loop11.Value("State"));
    //Clicks the 'Zip' object.
    Aliases.Orders.OrderForm.Group.Zip.Click(47, 10);
    //Enters the text KeywordTests.LogDisplayInFolders.Variables.Loop1("Zip") in the 'Zip' text editor.
    Aliases.Orders.OrderForm.Group.Zip.SetText(Project.Variables.Loop11.Value("Zip"));
    //Clicks the 'MasterCard' button.
    Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
    //Clicks the 'Visa' button.
    Aliases.Orders.OrderForm.Group.Visa.ClickButton();
    //Clicks the 'MasterCard' button.
    Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
    //Selects the 'FamilyAlbum' item of the 'ProductNames' combo box.
    Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
    //Clicks the 'UpDownEdit' object.
    Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit.Click(13, 6);
    //Enters the text '' in the 'UpDownEdit' text editor.
    Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit.SetText("");
    //Sets the value of the UpDown control 'Quantity' to 3.
    Aliases.Orders.OrderForm.Group.Quantity.wValue = 3;
    //Clicks the 'Group' object.
    Aliases.Orders.OrderForm.Group.Click(270, 93);
    //Clicks the 'Discount' object.
    Aliases.Orders.OrderForm.Group.Discount.Click(5, 8);
    //Enters the text '10%' in the 'Discount' text editor.
    Aliases.Orders.OrderForm.Group.Discount.SetText("10%");
    //Clicks the 'Group' object.
    Aliases.Orders.OrderForm.Group.Click(263, 100);
    //Clicks the 'CardNo' object.
    Aliases.Orders.OrderForm.Group.CardNo.Click(35, 6);
    //Enters the text KeywordTests.LogDisplayInFolders.Variables.Loop1("Card No") in the 'CardNo' text editor.
    Aliases.Orders.OrderForm.Group.CardNo.SetText(Project.Variables.Loop11.Value("Card No"));
    //Sets the date '06/04/2009' in the 'ExpDate' date/time picker.
    Aliases.Orders.OrderForm.Group.ExpDate.wDate = "06/04/2009";
    //Clicks the 'ButtonOK' button.
    Aliases.Orders.OrderForm.ButtonOK.ClickButton();
    //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder();
    Project.Variables.Loop11.Next();
  }
  //Compares the OrdersView1 Stores item with the contents of the control.
  Tables.OrdersView1.Check();
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
  //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}