import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  budgetItems: any[] = [];
  creditItems: any[] = [];

  constructor(private router: Router, private summaryService: SummaryService) {}

  addExpense(expense: { description: string, amount: number, datetime: string, recurrenceType: string }) {
    this.budgetItems.push(expense);
  }

  addCredit(credit: { amount: number, recurrenceType: string }) {
    this.creditItems.push(credit);
  }

  showResults(): void {
    const totalExpenses = this.budgetItems.reduce((acc, item) => acc + item.amount, 0);
    const totalCredit = this.creditItems.reduce((acc, item) => acc + item.amount, 0);
    const savings = totalCredit - totalExpenses;

    this.summaryService.setSummaryData(totalExpenses, totalCredit, savings);
    this.router.navigate(['/summary']);
  }
}
