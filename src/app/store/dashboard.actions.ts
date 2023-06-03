import { createAction, props } from '@ngrx/store';

export const loadCount = createAction('[Dashboard] Load Count');

export const loadCountSuccess = createAction(
  '[Dashboard] Load Count Success',
  props<{ count: object }>()
);

export const loadCountFailure = createAction(
  '[Dashboard] Load Count Failure',
  props<{ error: string }>()
);
