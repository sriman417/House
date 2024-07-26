import { Component, Output, EventEmitter } from '@angular/core';

export interface CreditItem {
  amount: number;
  recurrenceType: string;
}

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  @Output() creditAdded = new EventEmitter<CreditItem>();
  amount: number = 0;
  recurrenceType: string = '';

  addCredit() {
    if (this.amount > 0 && this.recurrenceType) {
      const newItem: CreditItem = { amount: this.amount, recurrenceType: this.recurrenceType };
      this.creditAdded.emit(newItem);
      this.amount = 0;
      this.recurrenceType = '';
    }
  }
}
