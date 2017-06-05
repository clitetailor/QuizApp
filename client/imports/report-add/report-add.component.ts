import { Component } from '@angular/core';
import { Router } from '@angular/router';
import template from './report-add.component.html';
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { ReportService } from '../report.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    template,
    styles: []
})

export class ReportAddComponent {
  details: string;
  reportForm: FormGroup;
  sending: boolean = false;
  reportsub: Subscription;
  constructor(private router: Router,private formBuilder: FormBuilder, private reportService: ReportService) {}
  ngOnInit(){
    this.reportForm = this.formBuilder.group({
      content: ['', Validators.required]
      
    })
  }
  send() {
    this.sending = true;
    this.details = 'Sending Report...';
    this.reportsub = MeteorObservable.call('report-packet', this.reportService.getQuizId(), this.reportForm.value.content).subscribe(report=>{
      this.closePopup();
    })
    
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}