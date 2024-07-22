import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  amount = 0;
  recurrenceType = ''; 

  @Output() creditAdded = new EventEmitter<{ amount: number, recurrenceType: string }>();

  credit() {
    if (this.amount && this.recurrenceType) {
      this.creditAdded.emit({
        amount: this.amount,
        recurrenceType: this.recurrenceType
      });
      this.amount = 0;
      this.recurrenceType = '';
    }
  }
}
