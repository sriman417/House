import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  description = '';
  amount = 0;
  datetime = '';
  recurrenceType = ''; 
  budgetService: BudgetService;
  constructor(budgetService: BudgetService) {
    this.budgetService = budgetService;
  }

  addExpense() {
    if (this.description && this.amount && this.datetime && this.recurrenceType) {
      this.budgetService.addItem(this.description, this.amount, this.datetime, this.recurrenceType);
      this.description = '';
      this.amount = 0;
      this.datetime = ''; 
      this.recurrenceType = '';
    }
  }
}
