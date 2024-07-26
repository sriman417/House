import { Component, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../budget.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter<BudgetItem>();
  description = '';
  amount = 0;
  datetime = '';
  recurrenceType = '';

  addExpense() {
    if (this.description && this.amount > 0) {
      const newItem: BudgetItem = {
        description: this.description, amount: this.amount, datetime: this.datetime,
        recurrenceType: this.recurrenceType
      };
      this.expenseAdded.emit(newItem);
      this.description = '';
      this.amount = 0;
      this.datetime = '';
      this.recurrenceType = '';
    }
  }
}
