import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface BudgetItem {
  amount: number;
  recurrenceType: string;
  description: string;
  datetime: string;
}

export interface CreditItem {
  amount: number;
  recurrenceType: string;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgetItemsSubject = new BehaviorSubject<BudgetItem[]>([]);
  private creditItemsSubject = new BehaviorSubject<CreditItem[]>([]);

  private budgetItemAddedSubject = new Subject<BudgetItem>();
  private creditItemAddedSubject = new Subject<CreditItem>();

  budgetItems$ = this.budgetItemsSubject.asObservable();
  creditItems$ = this.creditItemsSubject.asObservable();

  budgetItemAdded$ = this.budgetItemAddedSubject.asObservable();
  creditItemAdded$ = this.creditItemAddedSubject.asObservable();

  constructor() {
    this.budgetItemAdded$.pipe(
      mergeMap((item) => this.addToBudgetItems(item))
    ).subscribe();

    this.creditItemAdded$.pipe(
      mergeMap((item) => this.addToCreditItems(item))
    ).subscribe();
  }

  addBudgetItem(item: BudgetItem) {
    this.budgetItemAddedSubject.next(item);
  }

  addCreditItem(item: CreditItem) {
    this.creditItemAddedSubject.next(item);
  }

  private addToBudgetItems(item: BudgetItem): Observable<void> {
    const currentItems = this.budgetItemsSubject.value;
    this.budgetItemsSubject.next([...currentItems, item]);
    return of(void 0); 
  }

  private addToCreditItems(item: CreditItem): Observable<void> {
    const currentItems = this.creditItemsSubject.value;
    this.creditItemsSubject.next([...currentItems, item]);
    return of(void 0); 
  }

  getTotalExpenses(): number {
    return this.budgetItemsSubject.value.reduce((total, item) => total + item.amount, 0);
  }

  getTotalCredits(): number {
    return this.creditItemsSubject.value.reduce((total, item) => total + item.amount, 0);
  }

  getSavings(): number {
    return this.getTotalCredits() - this.getTotalExpenses();
  }
}
