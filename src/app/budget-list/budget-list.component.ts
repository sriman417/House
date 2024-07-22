import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnChanges {
  @Input() budgetItems: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['budgetItems']) {
      this.budgetItems = changes['budgetItems'].currentValue;
    }
  }

  removeItem(id: number) {
    // Handle removal of items here
  }
}
