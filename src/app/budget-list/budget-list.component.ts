import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

interface BudgetItem {
  id: number;
  description: string;
  amount: number;
  datetime: any;
  recurrenceType: string; 
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgetItems: BudgetItem[] = [];
  budgetService: BudgetService;

  constructor(budgetService: BudgetService) {
    this.budgetService = budgetService;
  }

  ngOnInit(): void {
    this.budgetItems = this.budgetService.getItems();
  }

  removeItem(id: number) {
    this.budgetService.removeItem(id);
    this.budgetItems = this.budgetService.getItems();
  }
}
