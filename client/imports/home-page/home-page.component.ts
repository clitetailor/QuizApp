import { Component, OnInit } from '@angular/core';
import template from './home-page.component.html';
import * as styles from './home-page.component.styl';

@Component({
  selector: 'app-home-page',
  template: template,
  styles: [styles.textContent]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs = [
    "Lastest",
    "Trend",
    "Math",
    "Chemistry"
  ]

  activeTab = 0;

  quizzes = [{

  }, {

  }, {

  }, {

  }, {

  }, {

  }, {

  }]

  switchTab(i) {
    if (this.activeTab !== i) {
      this.activeTab = i;
    }
  }
}
