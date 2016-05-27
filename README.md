# _Independent Project: Modern JS - GitHub User Lookup _

#### _A website where names and descriptions of a person's public repository can be displayed. , May 27, 2016_

#### By _Inthrayuth Mahaphol_

## Description

A website where the user can enter a GitHub username into a form. The website will display names and descriptions of that username's public repositories.

## Setup/Installation Requirements

* Link to repository: https://github.com/inthra/w1Fri-UserLookup.git
* Clone or download this repository to your Github account
* Create a project directory on your computer
* Have Node.js installed on your computer
* In your terminal run npm install, then bower_install, then gulp build, and then gulp_serve
* A local web server should automatically open in your browser with the website loaded if you have a browser open

## Setup API Requirements

* You may need to get your own the GitHub API key. Without the key, you can retrieve GitHub information only 60 requests per hour. However, you can access 5,000 requests per hour if you have the key. GitHub refers to these keys as "Personal Access Tokens". You can get the key by generating it via your GitHub account.

* Anyone who uses the app will need their own key in a local file with the same filename and location.

* Create a file in the top level of your project directory called .env (hidden file) to hold our API key. This is a common file extension for a configuration file used to set up environmental variables. Paste your API key in your .env file that you just created and store it in an exported property named apiKey.

* _API key .env (hidden file) file example:_
**exports.apiKey = "YOUR-API-KEY-GOES-HERE";**

* _In your .js file (JavaScript file) that gets access to the API key, add the following requirement:_
**var apiKey = require('./../.env').apiKey;**

## Known Bugs

If a bug is found, please let me know via Github.

## Support and contact details

Feel free to contact me with questions or suggestions and contribute to the code.

## Technologies Used

* _Git_
* _Github_
* _Atom text editor_
* _JavaScript_
* _Node.js - including npm and bower_

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 Inthrayuth M.