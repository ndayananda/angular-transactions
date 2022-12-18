import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TransactionsService } from '../transactions.service';
import { TransactionData } from '../transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactionsData: TransactionData = { days: [] };

  constructor(private transactionsService: TransactionsService, private router: Router) {}

  ngOnInit(): void {
      this.getTransactions()
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe(transactions => this.transactionsData = transactions);
  }
  
  trackByFn(index: number) {
    return index;
  }

  onTransactionClick(date: string, id: number) {
    this.router.navigate([`/transactions/${new Date(date).getTime()}/${id}`])
  }
}
