Startup Starter
===============

This project was intended to allows users to get started with their programming projects easier. It makes use of many modern packages that allow for faster development. It includes a testing suite as well as the handlebars templating language and revolves around the MEAN (Mongo, Express, Angular, and Node) framework. In particular, this project is termed the "startup starter" because it's intended to be a full suite to create a startup. With inclusion of the ionic framework for mobile development as well as the MEAN suite for web development, it targets all aspects of a market.


Table of Contents
-----------------

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)


Features
--------

- **OAuth 2.0 Authentication** via Facebook
- MVC Project Structure
- Node.js clusters support
- Rails 3.1-style asset pipeline by connect-assets
- LESS stylesheets (auto-compiled without Gulp/Grunt)
- Contact Form (powered by Mailgun, Sendgrid or Mandrill)
- Cross-Site Request Scripting protection
- **Account Management**
 - Gravatar
 - Profile Details
 - Change Password
 - Forgot Password
 - Reset Password
 - Link multiple OAuth strategies to one account
 - Delete Account


Prerequisites
-------------

- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- [Cordova/Phonegap](http://phonegap.com/install/)
- [Ionic](http://ionicframework.com/)
- [Android Dev Environment](http://developer.android.com/sdk/index.html)

**Note:** There will be many more packages and plugins necessary to run the application. I suggest reading through which errors are raised when compiling either the web or mobile end and installing those necessary plugins into your computer. Note that you will probably need to install certain versions of python/rvm in order for some packages to work properly.


Getting Started
---------------

Get started by first cloning the repository:

```bash
# Get the latest version
$ git clone git@github.com:danXyu/spotstop.git
$ cd spotstop

# To run the mobile end:
$ cd mobile
$ ionic build ios / ionic build android
$ ionic emulate ios / ionic emulate android

# To run the web end:
$ cd web
$ npm install
$ node app.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.


Deployment
----------


Changelog
---------
### 0.0.1 (May 24, 2015)
- Facebook oauth and connection to spotify api.
- First development version of mobile app.
- Web landing page creation linking to mobile download.

Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome, but due to the opinionated nature of this
project, I cannot accept every pull request. Please open an issue before
submitting a pull request. This project uses
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions. If you are submitting a pull request that involves
Jade templates, please make sure you are using *spaces*, not tabs.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2015 Dan Yu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

