import { Component } from '@angular/core';
import template from './app.component.html'
import { textContent } from './app.component.styl'

@Component({
  selector: 'app-root',
  template: template,
  styles: [textContent]
})
export class AppComponent {
  title = 'app works!';
}
