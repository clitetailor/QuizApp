import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  username = ""
  password = ""


  login() {
    console.log(this.username, this.password);
  }
}

