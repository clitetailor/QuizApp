import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import template from './report-manager.component.html';
import { textContent } from './report-manager.component.styl'

@Component({
  selector: 'app-report-manager',
  template: template,
  styles: [textContent]
})
export class ReportManagerComponent implements OnInit {
  public reports: any[];
  public keyword: string;
  constructor(private reportService: ReportService) {

  }
  ngOnInit() {
    this.loadData();
  }
  Search() {
    this.reportService.Search(this.keyword).subscribe((response: any) => {
      this.reports = response;
    }, error => {
      console.log("System error API");
    });
  }
  Delete(id: number) {
    let confirmResult = confirm("Are you sure to delete report ?");
    if (confirmResult) {
      this.reportService.Delete(id).subscribe(response => {
        if (response) {
          alert('Delete Success !!!');
          this.loadData();
        }
      })
    }
  }
  loadData() {
    this.reportService.GetList().subscribe((response: any) => {
      this.reports = response;
    }, error => {
      console.log("System error API");
    });
  }
}
