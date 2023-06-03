import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as DashboardActions from './dashboard.actions';
import { BalanceService } from '../services/balance.service';
import { TransactionsService } from '../services/transactions.service';

@Injectable()
export class DashboardEffects {
  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadCount),
      mergeMap(() =>
        this.balanceService.get().pipe(
          map((count: object) => DashboardActions.loadCountSuccess({ count })),
          catchError((error: string) =>
            of(DashboardActions.loadCountFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private balanceService: BalanceService,
    private transactionsService: TransactionsService
  ) {}
}
