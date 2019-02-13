import { combineReducers } from 'redux';
import tiles from './tiles';
import banner from './banner';
import loading from './loading';
import forms from './forms';
import { connectRouter } from 'connected-react-router';

export default (history: any) => combineReducers({
  router: connectRouter(history),
  tiles,
  banner,
  forms,
  loading
});
