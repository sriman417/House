import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService, BudgetItem, CreditItem } from '../budget.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  budgetItems: BudgetItem[] = [];
  creditItems: CreditItem[] = [];

  totalExpenses = 0;
  totalCredit = 0;
  savings = 0;

  constructor(private budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    this.budgetService.budgetItems$.subscribe(items => {
      this.budgetItems = items;
      this.totalExpenses = this.budgetService.getTotalExpenses();
      this.savings = this.budgetService.getSavings();
    });

    this.budgetService.creditItems$.subscribe(items => {
      this.creditItems = items;
      this.totalCredit = this.budgetService.getTotalCredits();
      this.savings = this.budgetService.getSavings();
    });
  }

  addExpense(item: BudgetItem) {
    this.budgetService.addBudgetItem(item);
  }

  addCredit(item: CreditItem) {
    this.budgetService.addCreditItem(item);
  }

  showResults(): void {
    this.router.navigate(['/summary'], {
      state: {
        totalExpenses: this.totalExpenses,
        totalCredit: this.totalCredit,
        savings: this.savings
      }
    });
  }
}
