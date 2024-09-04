package main;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js/dist/zone';
import '@angular/common/locales/global/en';
import '@angular/cdk/layout';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js/dist/zone';
import '@angular/common/locales/global/en';
import '@angular/cdk/layout';
import '@angular/material/prebuilt-themes/indigo-pink.css';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));