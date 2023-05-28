function callPerson()
{
  var person;
  person = WebServices.WebService1.GetPerson();
  if (person.FirstName == "Fred")
  {
    Log.Message("All good!");
  }
}

