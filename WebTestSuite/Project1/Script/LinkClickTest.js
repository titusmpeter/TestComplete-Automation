function ClickAllLinks()
{
  var page;
  var links;
  Browsers.Item(btEdge).Navigate("https://detegoglobal.com/"); //Open Detego URL on MS Edge
  let browser = Aliases.browser;    //name map browser object
  page = browser.Page("https://detegoglobal.com/*"); //parse and validate redirection to the correct URL
  links = page.contentDocument.links; //return a collection of all the links on the webpage
  
  for (i=0; i<links.length; i++) // loop over created links collection 
  {
    links.item(i).click(); //click on each link item
    Log.Message(links.item(i).OuterHtml); //return the outer HTML element, including attributes, start tag, and end tag for each link 
  }

}

