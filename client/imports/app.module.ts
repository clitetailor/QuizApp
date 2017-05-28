import "angular2-meteor-polyfills"

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { QuizzesListComponent } from './quizzes-list.component'

@NgModule({
    declarations: [
        AppComponent,
        QuizzesListComponent
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