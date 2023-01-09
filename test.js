const webdriver= require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')
const {By}=require('selenium-webdriver')

const test=async()=>{
    const driver= new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
    console.log("wait for some time please")
    await driver.get('http://localhost:3030')

    // chceking weather the app is running or not by getting title of website 
    const title= await driver.getTitle()
    console.log(title)
    console.log("Test Case 1 is successful")

    // filling email and password for loggin and checking loggin functionality 
    await driver.findElement(By.xpath("/html/body/div/div/a")).click();
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys('bilal@gmail.com')
    await driver.findElement(By.id("exampleInputPassword1")).sendKeys('123123')
    await driver.findElement(By.xpath("/html/body/div/div/div/form/button")).click();
    const t=await driver.findElement(By.xpath("/html/body/div/h2")).getText()
    console.log(t)
    if(t=="Task List:"){
        console.log("logged in")
        console.log("Test Case 2 is successful")
    }

    // adding a task to the database of todolist 
    
    await driver.findElement(By.xpath("/html/body/div/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div/form/div[1]/input")).sendKeys('new task of devops')
    await driver.findElement(By.xpath("/html/body/div/div/form/div[2]/input")).sendKeys('10 jan 2023')
    await driver.findElement(By.xpath("/html/body/div/div/form/button")).click();
    const checktitle=await driver.findElement(By.xpath("/html/body/div/h2")).getText()
    console.log(t)
    if(t=="Task List:"){
        console.log("Task successfully added")
        console.log("Test Case 3 is successful")
    }


    // Delete first task in database of the user 
    const taskname= await driver.findElement(By.xpath("/html/body/div/ul/div[1]/h4")).getText()
    if(taskname !==""){

        await driver.findElement(By.xpath("/html/body/div/ul/div[1]/form/button")).click();
        console.log("task deleted of taskname: "+taskname)
        console.log("Test Case 4 is successful")
    }
    else{
        console.log("no task available to delete")
    }

    // Checking the logout functionality of the app 

    
    await driver.findElement(By.xpath('//*[@id="navbarSupportedContent"]/ul[2]/li[2]/a')).click();
    const checklogout=await driver.findElement(By.xpath("/html/body/div/div/div/form/div[1]/label")).getText()
    if(checklogout=="Email address"){
        console.log("successfully loggedout from the app")
        console.log("Test Case 5 is successful")
    }



    

    


}

test()