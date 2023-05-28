function test()
{
  test4();
  test5();
}

function test4() //scripted version of SOAPTest3
{
  WebServices.SOAPws3.GetPerson();
  XML.GetPerson.Check(WebServices.SOAPws3);
}

function test5()
{
  WebServices.SOAPws4.Multiply(3, 9);
  XML.Multiply.Check(WebServices.SOAPws4);
}