import { SAY_HELLO } from '../actions/hello';

export default function hello(state = '', action) {
  switch (action.type) {
    case SAY_HELLO:
      return state + 'Hello ';
    default:
      return state;
  }
}
