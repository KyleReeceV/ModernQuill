package com.mq.frontend.util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UtilFuncsForSeleniumTests {

	private static WebDriverWait wait; 
	
	public static void waitWithoutExpectedConditions(WebDriver driver) {
		wait= new WebDriverWait(driver, 2);
		
		//code below will force selenium to wait without expected condition specified	
		try {
			wait.until(ExpectedConditions.attributeContains(By.id("- - - "), "class", "poieuwr"));
		} catch (Exception e) {
			//do nothing
		}
	}
	
	
	public static boolean isAlertPresent (WebDriver driver) {
		wait= new WebDriverWait(driver, 2);
		
		if(wait.until(ExpectedConditions.alertIsPresent())==null)
		    return false;
		else
			return true;
	}
	
	
}
