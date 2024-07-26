import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  totalExpenses = 0;
  totalCredit = 0;
  savings = 0;

  constructor(private budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    this.totalExpenses = this.budgetService.getTotalExpenses();
    this.totalCredit = this.budgetService.getTotalCredits();
    this.savings = this.budgetService.getSavings();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
