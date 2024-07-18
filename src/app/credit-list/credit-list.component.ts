import { Component, OnInit } from '@angular/core';
import { BudgetService, CreditItem } from '../budget.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  creditItems: CreditItem[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.creditItems = this.budgetService.getCreditItems();
  }

  removeCredit(id: number): void {
    this.budgetService.removeCredit(id);
    this.creditItems = this.budgetService.getCreditItems();
  }
}
