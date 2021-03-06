/// <reference path="./index.d.ts" />
/// <reference path="../server/index.d.ts" />

import "angular2-meteor-polyfills"
import { Meteor } from 'meteor/meteor'
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { enableProdMode } from "@angular/core"
import { AppModule } from "./imports/app.module"

enableProdMode();

Meteor.startup(() => {
	platformBrowserDynamic().bootstrapModule(AppModule);
})