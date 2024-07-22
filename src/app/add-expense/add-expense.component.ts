import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() expenseAdded = new EventEmitter<{ description: string, amount: number, datetime: string, recurrenceType: string }>();

  addExpense() {
    if (this.description && this.amount && this.datetime && this.recurrenceType) {
      this.expenseAdded.emit({
        description: this.description,
        amount: this.amount,
        datetime: this.datetime,
        recurrenceType: this.recurrenceType
      });
      this.description = '';
      this.amount = 0;
      this.datetime = ''; 
      this.recurrenceType = '';
    }
  }
}
