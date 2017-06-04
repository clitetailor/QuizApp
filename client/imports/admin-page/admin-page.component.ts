import { Component, OnInit, OnDestroy } from '@angular/core';
import template from './admin-page.component.html'
import { textContent } from './admin-page.component.styl'
import { Observable, Subscription, Subject } from 'rxjs';
import { MeteorObservable } from "meteor-rxjs";
import { Roles } from 'meteor/alanning:roles';
import {User } from '../../../both/models/user.model';
import { Users } from '../../../both/collections/users.collection';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  template: template,
  styles: [textContent]
})
@InjectUser('user')
export class AdminPageComponent implements OnInit, OnDestroy {
  user: Meteor.User;
  members: Observable<User[]>;
  editors: Observable<User[]>;
  users: Observable<User[]>;
  listSub: Subscription;
  constructor(
    private router: Router,
    private state: ActivatedRoute
  ) { 
    
  }

  ngOnInit() { 
    if (Meteor.user()==null){
        console.log(Meteor.user());
        this.router.navigate(['login']);
    }
    else {
        this.user = Meteor.user();
        console.log(Meteor.user());
        if (this.listSub){
          this.listSub.unsubscribe();
        }
        console.log('start sub');
        this.listSub = MeteorObservable.subscribe('users').zone().subscribe(()=>{
          MeteorObservable.autorun().zone().subscribe(()=>{
           if(this.grant()){
             this.members = Users.find({ 'roles.__global_roles__': ['member']});
             this.editors = Users.find({ 'roles.__global_roles__':['editor']});
             this.users = Users.find(
                 {
                     $and: [
                        {
                            'roles.__global_roles__': {
                                $not: 
                                    {
                                        $all: ['member']
                                    }
                            }
                        },
                        {
                            'roles.__global_roles__': {
                                $not: 
                                    {
                                        $all: ['editor']
                                    }
                            }
                        },
                        {
                            'roles.__global_roles__': {
                                $not: 
                                    {
                                        $all: ['admin']
                                    }
                            }
                        }
                     ]
                 });   
           }
            
                      
        });
      });
    }
    
  }
  grant(){
    return Roles.userIsInRole(Meteor.user(), 'admin');
  }

  addMember(user: User){
    let id = user._id;
    console.log(id);
    Roles.addUsersToRoles(id, ['member'], Roles.GLOBAL_GROUP)
  }
  addEditor(member: User) {
    let idMember = member._id;
    if( Roles.userIsInRole(idMember, ['member'])){
      console.log('addEditor');
      Roles.removeUsersFromRoles(idMember, ['member'], Roles.GLOBAL_GROUP );
      console.log('ok');
    }
    Roles.addUsersToRoles(idMember, ['editor'], Roles.GLOBAL_GROUP)
  }

  removeEditor(editor: User) {
    let idEditor = editor._id;
    if( Roles.userIsInRole(idEditor, ['editor'])){
      Roles.removeUsersFromRoles(idEditor, ['editor'], Roles.GLOBAL_GROUP );
    }
    Roles.addUsersToRoles(idEditor, ['member'], Roles.GLOBAL_GROUP)
  }

  removeMember(member: User) {
    if(window.confirm('xoa nguoi dung?')){
      Users.remove({_id: member._id});
    }
  }
  ngOnDestroy(){
    if (this.listSub){
      this.listSub.unsubscribe();
    }
  }
  logout(){
      Meteor.logout();
      this.router.navigate(['/login']);
  }
}
