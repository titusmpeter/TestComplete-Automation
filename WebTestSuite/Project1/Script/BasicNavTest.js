﻿function Test1()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://smartbear.com/");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSoftwareTestingMonitoringDev.Wait();
  //Opens the 'linkResources' drop-down window.
  Aliases.browser.pageSoftwareTestingMonitoringDev.form.headerPLtHeader.navProducts.linkResources.DropDown();
  //Clicks the 'imageAcademySvg' object.
  Aliases.browser.pageSoftwareTestingMonitoringDev.form.headerPLtHeader.navProducts.linkAcademy.imageAcademySvg.Click(36, 21);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSmartbearComAcademy.Wait();
  //Clicks the 'linkViewCourses' link.
  Aliases.browser.pageSmartbearComAcademy.form.sectionSmartbearAcademy.linkViewCourses.Click();
  //Clicks the 'textboxSearch' object.
  Aliases.browser.pageSmartbearComAcademy.form.sectionAvailableNow.textboxSearch.Click(102, 14);
  //Clicks the 'textboxSearch' object.
  Aliases.browser.pageSmartbearComAcademy.form.sectionAvailableNow.textboxSearch.Click(102, 14);
  Aliases.browser.pageSmartbearComAcademy.Wait();
  Aliases.browser.pageSmartbearComAcademy.form.sectionAvailableNow.textboxSearch.SetText("testcomplete");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSmartbearComAcademy.Wait();
  //Clicks the 'panel' object.
  NameMapping.Sys.browser.pageSmartbearComAcademy.form.panelRoot.sectionAvailableNow.panelAvailableNow.panelProduct.panelProduct.panelProduct.panel.Click(281, 28);
  //Selects the 'All' item of the 'selectProductList' combo box.
  Aliases.browser.pageSmartbearComAcademy.form.sectionAvailableNow.selectProductList.ClickItem("All");
  //Clicks the 'panel' object.
  Aliases.browser.pageSmartbearComAcademy.form.sectionAvailableNow.linkTestcomplete101Certification.panel.Click(186, 130);
}