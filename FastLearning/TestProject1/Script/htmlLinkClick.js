﻿function clickLinks()
{
  var page;
  var links;
  //var all;
  Browsers.Item(btEdge).Navigate("https://detegoglobal.com/");
  let browser = Aliases.browser;
  page = browser.Page("https://detegoglobal.com/*");
  links = page.contentDocument.links;
  //all = page.contentDocument.all; //get all elements in the webpage i.e. forms, images, links, divs, etc
  
  for (i=0; i<links.length; i++)
  {
    links.item(i).Click(); //click on each link on the webpage
    Log.Message(links.item(i).OuterHtml); // write the outer html for each single hyper link
  }
}
