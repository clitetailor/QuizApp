import {Component, OnInit, NgZone} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../both/models/user.model';
import { Users } from '../../../both/collections/users.collection';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { textContent } from './signup.component.styl';
import template from './signup.component.html';
import { InjectUser } from 'angular2-meteor-accounts-ui';


@Component({
  selector: 'signup',
  template,
  styles: [textContent]
})
@InjectUser('user')
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string;
 
  constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
 
    this.error = '';
  }
 
  signup() {
        console.log(this.signupForm.value);
        if (this.signupForm.valid) {
            console.log('addd');
            const id = Accounts.createUser({
                username: this.signupForm.value.username,
                password: this.signupForm.value.password,
            }, (err)=>{
                if (err) {
                    this.zone.run(() => {
                        this.error = err;
                        console.log(this.error);
                    });
                }
            });
        }
  }
      
}