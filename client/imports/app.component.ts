import { Component } from '@angular/core';
import template from './app.component.html'
import { textContent } from './app.component.styl'
import { InjectUser } from 'angular2-meteor-accounts-ui';
@Component({
  selector: 'app-root',
  template: template,
  styles: [textContent]
})
@InjectUser('user')
export class AppComponent {
  title = 'app works!';
}
