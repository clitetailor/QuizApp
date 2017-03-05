import "angular2-meteor-polyfills"

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [
        AppComponent
    ],
    providers: [
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {

    }
}