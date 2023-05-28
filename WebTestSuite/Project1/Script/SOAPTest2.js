function SOAPTest2()
{
  WebServices.SOAPws4.Multiply(3, 9);
  //Compares the response of the WebServices.SOAPws4 web service against the stored data.
  XML.Multiply.Check(WebServices.SOAPws4);
}