import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../services/report.service';
import template from './report-add.component.html'
import { textContent } from './report-add.component.styl'

@Component({
  selector: 'app-report-add',
  template: template,
  styles: [textContent]
})
export class ReportAddComponent implements OnInit {
 public _id : number;
  public report :any;
 
  constructor(
     private router: Router, private activatedRoute: ActivatedRoute,
       public reportService: ReportService)
  {}

  ngOnInit() {
  this.report={};
  }
  SaveForm(){
     this.reportService.Add(this.report).subscribe(response=> {
     if(response){
         alert("Add Report Success !!!");
            this.router.navigate(['report']);

     }
     })
  }
  GotoReport(){
    this.router.navigate(['/'])
  }
}
