import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SummaryComponent } from './summary/summary.component';
import { BudgetService } from './budget.service';
import { CreditComponent } from './credit/credit.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    BudgetListComponent,
    SummaryComponent,
    CreditComponent,
    CreditListComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
