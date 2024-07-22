import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  totalExpenses = 0;
  totalCredit = 0;
  savings = 0;

  constructor(private summaryService: SummaryService, private router: Router) {}

  ngOnInit(): void {
    const summaryData = this.summaryService.getSummaryData();
    this.totalExpenses = summaryData.totalExpenses;
    this.totalCredit = summaryData.totalCredit;
    this.savings = summaryData.savings;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
