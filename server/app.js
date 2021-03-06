/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

/**
 * Main application file
 */
/*jslint node: true*/

'use strict';

// Set default node environment to development

var express = require('express');
// Setup server
var app = express();
require('./config/express')(app);
require('./config/passport')(app);
require('./config/csrf')(app);
require('./routes')(app);

// Expose app
exports = module.exports = app;
