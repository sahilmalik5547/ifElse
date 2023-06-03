import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

export interface DashboardState {
  count: object;
  loading: boolean;
  error: string | null;
}

export const initialState: DashboardState = {
  count: { balance: 0, expenses: 0, income: 0, savings: 0 },
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadCount, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DashboardActions.loadCountSuccess, (state, { count }) => ({
    ...state,
    count,
    loading: false,
  })),
  on(DashboardActions.loadCountFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
