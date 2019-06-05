<<<<<<< HEAD
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
=======
import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

<<<<<<< HEAD
declare const require: any;
=======
// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
<<<<<<< HEAD
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
=======
let context = require.context('./', true, /\.spec\.ts/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
