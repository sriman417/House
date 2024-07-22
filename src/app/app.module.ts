import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { CreditComponent } from './credit/credit.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { FirstComponent } from './first/first.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    BudgetListComponent,
    CreditComponent,
    CreditListComponent,
    FirstComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
