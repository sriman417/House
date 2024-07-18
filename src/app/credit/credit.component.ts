import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  amount = 0;
  recurrenceType = ''; 
  budgetService: BudgetService;

  constructor(budgetService: BudgetService) {
    
    this.budgetService = budgetService;
  }
  

  credit() {
    if (this.amount && this.recurrenceType) {
      this.budgetService.addCredit(this.amount, this.recurrenceType); // Update service with credit details
      this.amount = 0;
      this.recurrenceType = '';
    }
  }
}
