import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ReportService } from '../services/report.service';
import { Subscription } from 'rxjs';
import template from './report-detail.component.html'
import { textContent } from './report-detail.component.styl'

@Component({
  selector: 'app-report-detail',
  template: template,
  styles: [textContent]
})
export class ReportDetailComponent implements OnInit {
  public _id : number;
  public subscription :Subscription;
  public report :any;
 
  constructor(
     private router: Router, private activatedRoute: ActivatedRoute,
       public reportService: ReportService)
  {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params=>{
      this._id = params['id'];
    });
    this.reportService.GetSingle(this._id).subscribe((data)=>{
      this.report =data;
    });
    
  }
   GotoReport(){
    this.router.navigate(['report']);
  }
  ngOnDestroy() {
        this.subscription.unsubscribe();
    }
 
}
