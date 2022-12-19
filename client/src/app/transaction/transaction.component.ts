import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transactions.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent implements OnInit {
  transaction: Transaction | null = null;

  constructor(private route: ActivatedRoute, private transactionsService: TransactionsService ) {}

  ngOnInit(): void {
      this.getTransaction();
  }

  getTransaction() {
    const groupId = parseInt(this.route.snapshot.paramMap.get('groupId')!);
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.transactionsService.getTransactions().subscribe(transactions => {
      const group = transactions.days.find(({ id }) => new Date(id).getTime() === groupId);
      this.transaction = group?.transactions.find(({ id: transactionId }) => id === transactionId) || null;
    });
  }
}
