import { CHANGE_PAGINATION_PAGE, SET_PAGINATION_DATA } from 'store/actionTypes';

import { IPaginationState } from 'types/state';

import { PaginationReducerActionTypes } from './interface';

const initialState: IPaginationState = {};

export function paginationReducer(
  state: IPaginationState = initialState,
  action: PaginationReducerActionTypes,
): IPaginationState {
  switch (action.type) {
    case CHANGE_PAGINATION_PAGE: {
      return state;
    }

    case SET_PAGINATION_DATA: {
      const { resource, count, pages, currentPage } = action.payload;

      return {
        ...state,
        [resource]: {
          count,
          pages,
          currentPage,
        },
      };
    }

    default:
      return state;
  }
}
