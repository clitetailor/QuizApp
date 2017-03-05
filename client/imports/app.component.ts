import { Component } from '@angular/core'
import template from './app.component.html'
import * as style from './app.component.styl'

@Component({
    selector: 'app',
    template,
	styles: [ style.textContent ]
})
export class AppComponent {
    constructor() {
		
    }
}