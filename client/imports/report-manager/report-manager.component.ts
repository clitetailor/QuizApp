import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription, Subject } from 'rxjs';
import { MeteorObservable } from "meteor-rxjs";
import { Roles } from 'meteor/alanning:roles';
import {User } from '../../../both/models/user.model';
import { Users } from '../../../both/collections/users.collection';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { ActivatedRoute, Router } from '@angular/router';
import template from './report-manager.component.html';
import { textContent } from './report-manager.component.styl'
import { Reports } from '../../../both/collections/reports.collections';
import { Report} from '../../../both/models/report.model';
@Component({
  selector: 'app-report-manager',
  template: template,
  styles: [textContent]
})
@InjectUser('user')
export class ReportManagerComponent implements OnInit, OnDestroy {
  user: Meteor.User;
  reportSub: Subscription;
  reports: Observable<Report[]>;
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.reportSub = MeteorObservable.subscribe('reports').zone().subscribe(()=>{
      MeteorObservable.autorun().zone().subscribe(()=>{
        if (this.grant()){
          this.reports = Reports.find({});
        }
      })
    })
  }
  grant(){
    return Roles.userIsInRole(Meteor.user(), 'admin');
  }
  ngOnDestroy(){
    this.reportSub.unsubscribe();
  }
  gotoCenter(){
    this.router.navigate(['/admin']);
  }
  logout(){
    Meteor.logout();
    this.router.navigate(['/']);
  }
 
}
