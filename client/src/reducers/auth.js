import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
