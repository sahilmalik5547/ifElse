import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';
import { loadCount } from 'src/app/store/dashboard.actions';
import { DashboardState } from 'src/app/store/dashboard.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  count$!: Observable<object>;
  transactions$!: Observable<[]>;
  loading$!: Observable<boolean>;
  error$?: Observable<string | null>;
  cards: any = [
    { title: 'Balance', value: 0, faIcon: 'fas fa-wallet' },
    { title: 'Income', value: 0, faIcon: 'fas fa-hand-holding-usd' },
    { title: 'Savings', value: 0, faIcon: 'fa-solid fa-piggy-bank' },
    { title: 'Expenses', value: 0, faIcon: 'fa-solid fa-money-bill' },
  ];
  constructor(private store: Store<{ dashboard: DashboardState }>, private transactionsService : TransactionsService) {}

  ngOnInit(): void {
    this.count$ = this.store.select((state) => state.dashboard.count);
    this.loading$ = this.store.select((state) => state.dashboard.loading);
    this.error$ = this.store.select((state) => state.dashboard.error);
    
    this.store.dispatch(loadCount());
    this.getBalance();
    this.transactions$ = this.transactionsService.get();
  }

  getBalance() {
    let balanceSub = this.count$.subscribe(
      (balance: any) => {
        this.cards[0].value = balance.balance;
        this.cards[1].value = balance.income;
        this.cards[2].value = balance.savings;
        this.cards[3].value = balance.expenses;
      },
      (error: string) => {
        alert(Error + error);
      }
    );
    this.subscription?.add(balanceSub);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
