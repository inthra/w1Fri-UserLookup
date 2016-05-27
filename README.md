# Independent Project: Modern JS - GitHub User Lookup

#### A website where names and descriptions of a person's public repository can be displayed. , May 27, 2016

#### By _Inthrayuth Mahaphol_

## Description

A website where the user can enter a GitHub username into a form. The website will display names and descriptions of that username's public repositories. The app incorporates API to retrieve GitHub information.

## Setup/Installation Requirements

* Link to repository: https://github.com/inthra/w1Fri-UserLookup.git
* Clone or download this repository to your Github account
* Create a project directory on your computer
* Have Node.js installed on your computer
* In your terminal run **npm install, bower install, gulp build, and gulp serve**
* A local web server should automatically open in your browser with the website loaded if you have a browser open

## Setup API Requirements

* You need to get your own the GitHub API key. Without the key, you can retrieve GitHub information only 60 requests per hour. However, you can access 5,000 requests per hour if you have the key. GitHub refers to these keys as "Personal Access Tokens". You can get the key by generating it via your GitHub account.

* You will need to store the key in a local file with the same filename and location.

* You must name your API key variable _exports.apiKey_ in your .env file (hidden file) and store it in the root of the project directory.

* Create a file in the top level of your project directory called .env file to hold our API key. This is a common file extension for a configuration file used to set up environmental variables. Paste your API key in your .env file that you just created and store it in an exported property named apiKey.

* _API key .env (hidden file) file example:_
**exports.apiKey = "YOUR-API-KEY-GOES-HERE";**

* _In your .js file (JavaScript file) that gets access to the API key, add the following requirement:_
**var apiKey = require('./../.env').apiKey;**

## Known Bugs

If a bug is found, please let me know via Github.

## Support and contact details

Feel free to contact me with questions or suggestions and contribute to the code.

## Technologies Used

* Git
* Github
* Atom text editor
* JavaScript
* Node.js - including npm and bower

### License

_This software is licensed under the MIT license_

Copyright (c) 2016 Inthrayuth M.
