import { Component, OnInit, OnDestroy  } from '@angular/core'
import template from './app.component.html'
import * as style from './app.component.styl'
import {User } from '../../both/models/user.model';
import { Users } from '../../both/collections/users.collection';
import { Observable, Subscription, Subject } from 'rxjs';
import { MeteorObservable } from "meteor-rxjs";

import { Roles } from 'meteor/alanning:roles';

interface Options {
    [key: string]: any
}
@Component({
    selector: 'app',
    template,
	styles: [ style.textContent ]
})
export class AppComponent implements OnDestroy, OnInit{
    listusers: Observable<User[]>;
    listSub: Subscription;
    constructor() { }

    ngOnInit() {
        const options: Options = {
        }
        if (this.listSub) {
            this.listSub.unsubscribe();
        }
        this.listSub = MeteorObservable.subscribe('users', options).zone().subscribe(() => {
            MeteorObservable.autorun().zone().subscribe(() => {
                if (this.grant()) {
                    this.listusers = Users.find({});
                } else {
                    this.listusers = Users.find({ 'roles.__global_roles__': { $not: { $all: ['superadmin'] } } });
                }
                
            })
        })

    }
    grant(){
        return Roles.userIsInRole(Meteor.user(), 'superadmin');
    }
    removeUser(id){
        if(window.confirm('Xoa nguoi dung?')){
            Users.remove({_id: id});
        }
    }
   
    ngOnDestroy(){
        if (this.listSub){
            this.listSub.unsubscribe();
        }
    }
}