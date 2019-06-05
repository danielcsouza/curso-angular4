<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
=======
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
