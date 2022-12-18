import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './transactions.model';

@Pipe({name: 'currencyConverter'})
export class CurrencyConverterPipe implements PipeTransform {
  transform(transaction: Transaction): number {
    const { currencyCode, amount, currencyRate } = transaction;
    return currencyCode !== 'EUR' && currencyRate ? Math.round(amount * currencyRate) : amount;
  }
}