import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { AuthService } from '../auth.service';
import template from './login.component.html';
import { Roles } from 'meteor/alanning:roles';
import { textContent } from './login.component.styl';
@Component({
  selector: 'app-login',
  template,
  styles: [textContent]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  user: Meteor.User;
  redirect: string = '';
  
  constructor(private router: Router, private authService: AuthService, private zone: NgZone, private formBuilder: FormBuilder){

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.error='';
  }

  checkLogin() {
    if (this.loginForm.valid){
            Meteor.loginWithPassword(this.loginForm.value.username, this.loginForm.value.password, (err)=>{
                if (err) {
                    this.error = err;
                }else {
                    this.authService.testLogin().subscribe(()=> {
                        if (!!this.authService.user && Roles.userIsInRole(this.authService.user, ['admin'])){
                            this.zone.run(()=>{
                                this.router.navigate(['/admin']);
                            })
                        }
                        else if (!!this.authService.user && Roles.userIsInRole(this.authService.user, ['editor'])){
                          this.zone.run(()=>{
                            this.router.navigate(['/editor']);
                          })
                        }
                        else if (!!this.authService.user && Roles.userIsInRole(this.authService.user, ['member'])){
                          this.zone.run(()=> {
                            this.router.navigate(['/']);
                          })
                        }                      

                    });
                }
        //             this.zone.run(()=>{
        //             if (err){
        //                 this.error = err;
        //             }
        //             else {
                        
        //                 this.router.navigate(['/admin']);
        //             }
        //         });
           
            });
       };
  }
}

