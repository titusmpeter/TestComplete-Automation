﻿let orders;
let orderForm;
let groupBox;
let textBox;

function OrdersApp()
{
  TestedApps.Orders.Run();
  Log.AppendFolder("Log Folder");
  orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Orders|New order...");
  orderForm = orders.OrderForm;
  groupBox = orderForm.Group;
  groupBox.ProductNames.ClickItem("ScreenSaver");
  groupBox.Quantity.wValue = 5;
  textBox = groupBox.Discount;
  textBox.SetText("5%");
  textBox = groupBox.Customer;
  textBox.SetText("Lino");
  textBox = groupBox.Street;
  textBox.SetText("1700");
  textBox = groupBox.State;
  textBox.SetText("");
  textBox.Keys("![ReleaseLast]");
  textBox.SetText("MD");
  textBox = groupBox.City;
  textBox.SetText("Baltimore");
  textBox = groupBox.Zip;
  textBox.SetText("003300");
  groupBox.AE.ClickButton();
  textBox = groupBox.CardNo;
  textBox.SetText("9988776655");
  groupBox.ExpDate.wDate = "2010-05-06";
  groupBox.Date.wDate = "2007-04-06";
  orderForm.ButtonOK.ClickButton();
  Log.PopLogFolder();
  
  checkPoints();
  closeApp();
}

function checkPoints()
{
  // TODO 2 -cCheckpoint -oPeter  : Peter please fix the OCR checkpoint below
      //OCR Checkpoint
  // OCR.Recognize(Aliases.Orders.MainForm.OrdersView).CheckText("*Customer Name\nLino\nProduct\nScreen Saver\nQuantity Date\n5\n06/04/2007\nStreet\n1700\nCity\nBaltimore*");
    
     //Property Checkpoint
     aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 1);
     aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wSelectedItems", cmpEqual, "Lino");
     
  // TODO 1 -cCheckpoint -oPeter  : Fix Region check point i.e. increase pixel and color tolerance, currently at 0%
     //Region Checkpoint
     //Regions.OrdersView.Check(Aliases.Orders.MainForm.OrdersView);
     
     //Table Checkpoint
     Tables.OrdersView.Check();
}

function closeApp()
{  
  orders = Aliases.Orders;
  orders.MainForm.Close();
  orders.dlgConfirmation.btnNo.ClickButton();
}




