import { Component, OnInit } from '@angular/core';
import template from './user.component.html'
import * as styles from './user.component.styl'

@Component({
  selector: 'app-user',
  template: template,
  styles: [styles.textContent]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
