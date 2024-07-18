import { Injectable } from '@angular/core';

export interface BudgetItem {
  id: number;
  description: string;
  amount: number;
  datetime: string;
  recurrenceType: string;
}

export interface CreditItem {
  id: number;
  amount: number;
  recurrenceType: string;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgetItems: BudgetItem[] = [];
  creditItems: CreditItem[] = [];

  constructor() {
    const savedItems = localStorage.getItem('budgetItems');
    if (savedItems) {
      this.budgetItems = JSON.parse(savedItems);
    }
    const savedCredits = localStorage.getItem('creditItems');
    if (savedCredits) {
      this.creditItems = JSON.parse(savedCredits);
    }
  }

  getItems(): BudgetItem[] {
    return this.budgetItems;
  }

  addItem(description: string, amount: number, datetime: string, recurrenceType: string): void {
    const newItem: BudgetItem = {
      id: Date.now(),
      description,
      amount,
      datetime,
      recurrenceType
    };
    this.budgetItems.push(newItem);
    this.saveBudgetToLocalStorage();
  }

  removeItem(id: number): void {
    this.budgetItems = this.budgetItems.filter(item => item.id !== id);
    this.saveBudgetToLocalStorage();
  }

  getTotalAmount(): number {
    return this.budgetItems.reduce((total, item) => total + item.amount, 0);
  }

  addCredit(amount: number, recurrenceType: string): void {
    const newCredit: CreditItem = {
      id: Date.now(),
      amount,
      recurrenceType
    };
    this.creditItems.push(newCredit);
    this.saveCreditToLocalStorage();
  }

  removeCredit(id: number): void {
    this.creditItems = this.creditItems.filter(item => item.id !== id);
    this.saveCreditToLocalStorage();
  }

  getTotalCredit(): number {
    return this.creditItems.reduce((total, item) => total + item.amount, 0);
  }

  getCreditItems(): CreditItem[] {
    return this.creditItems;
  }

  saveBudgetToLocalStorage(): void {
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
  }

  saveCreditToLocalStorage(): void {
    localStorage.setItem('creditItems', JSON.stringify(this.creditItems));
  }
}
