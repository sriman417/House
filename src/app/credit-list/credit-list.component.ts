import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnChanges {
  @Input() creditItems: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['creditItems']) {
      this.creditItems = changes['creditItems'].currentValue;
    }
  }

  removeCredit(id: number): void {}
}
