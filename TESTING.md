![Final project image home page](documentation/mock_design.png)

## **Contents**

* [**Testing**](#testing)
  * [**Navigation**](#navigation)
  * [**Advent Calendar Door**](#advent-calendar-door)
  * [**Pop Up Box Puzzle Instructions**](#pop-up-box-puzzle-instructions)
  * [**Github image links**](#github-image-links)
  * [**Github image links**](#github-image-links)

* [Validator testing](#Validator testing)
    * [Code Validators](#CODE-VALIDATORS)
  
  
# **Testing**

### **Navigation** 

| Feature      | Expected          | Testing  | Result | Pass/Fail |
|-------------|-------------|-----|----------|:----:|
| Code-Vent Calendar Page Title | To redirect to home page | Clicked Code-Vent Calendar Page Title | Title navigates to home page | Pass |


### **Advent Calendar Door**

| Feature      | Expected  | Testing  | Result | Pass/Fail |
|-------------|-------------|-----|----------|:-----:|
| Door Opening upon page load | When site loads, door opens until day before current date | Reload page | door opens until day before current date | Pass |
| Clicking door for pop-up box puzzle instructions | Expected the pop-up box to appear upon clicking on door | Click On Door | pop-up box appears when door is clicked | Pass |
| Door Opening Sound | Sound to happen upon clicking on door | Click on door | Sound happens upon clicking on door | Pass |


### **Pop-Up Box Puzzle Instructions**

| Feature     | Expected  | Testing  | Result | Pass/Fail |
|-------------|-------------|-----|----------|:-----:|
| Pressing Solve Now Button | Coding challenge input puzzle box to open | Press Solve Now Button | Input box opens upon clicking door | Pass |
| Pressing Back Button | To go back to pop-up puzzle instructions | Press Back Button | Goes back to pop-up puzzle instructions | Pass |
| Pressing X Button on puzzle instruction | Closes instruction box | Press X Button | Closes instruction box | Pass |
| Pressing X Button | Closes puzzle input box | Press X Button | Closes puzzle input box | Pass |
| Pressing Submit Button | submit puzzle code  | press submit button | Submits input code | Pass |


### **Coding Puzzle Testing**

| Feature     | Expected  | Testing  | Result | Pass/Fail |
|-------------|-------------|-----|----------|:-----:|
| Testing puzzles | Expecting all input area to be typable, submitable | Attempt to solve puzzles | Solved puzzles and able to submit them | Pass|
| Submiting Code Solution | Expecting solution to be adviced that it is correct | Attempt to submit puzzles | submit puzzles and receive success message and reward | Pass|

[Back to contents](#contents)

---

## Validator testing

### HTML Validation

The W3C Markup Validator and W3C CSS Validator was used to validate my project to make sure there were no errors within the site.

* W3C HTML Validator Results


### CSS Validation

* W3C CSS Validator Results
    * [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fmanni8436.github.io%252Fhackvent-calendar%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


### JS Validation
*   - No errors or warnings were found when passing through the official [JSHint](https://jshint.com/) validator except the warnings that pointing at the use of webkits  

[Back to top](#christmas-hackathon)
## LIGHTHOUSE

![Lighthouse Report](documentation/lighthouse_report.png)

## Compatibility:

+ The app was tested on the following browsers: Chrome, Firefox, Brave, Edge:

  - Chrome:

  ![Main Page](documentation/compatibility/browser_chrome.png)
  
  - Firefox:

  ![Main Page](documentation/compatibility/browser_firefox.png)

  - Brave:

  ![Main Page](documentation/compatibility/browser_brave.png)
## Responsiveness:

+ The app was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  1. Mobile Screens:

    - Mobile 320x480, 320x568, 360x640, 375x667, 384x640, 411x731, 414x736:

     ![Mobile](documentation/responsiveness/responsiveness_mobile_devices.gif)

      
  1. Tablets Screens:

    - Tablet 600x960, 768x1024, 800x1280, 1366x1024, 1600x900, 1680x1050, 1920x1080, 1920x1200:
        
    ![Tablet](documentation/responsiveness/responsiveness_tablet_devices.gif)
      
  1. Desktop Screens:

    - Desktop 1024x600, 1024x800, 1366x768, 1440x900:
        
    ![Desktop](documentation/responsiveness/responsiveness_desktop_devices.gif)


+ Functionality:

The functionality of the links in the app was checked as well by different users.

 ![Functionality](documentation/responsiveness/observe_functionality.gif)