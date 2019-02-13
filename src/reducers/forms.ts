import { GET_FORMS } from '../actions/forms';
import { fulfilled, failed, pending } from '../lib/promiseMiddlewareTypes';
import { IForm } from 'src/types';

function allTiles(state = [], action: any): any {
  switch (action.type) {
    case fulfilled(GET_FORMS):
      return action.payload as IForm;
    case pending(GET_FORMS):
      return [];
    case failed(GET_FORMS):
      // TODO Error handling ...
      console.log('Could not load Tiles. Details:' + JSON.stringify(action.payload, null, 2));
      return [];
    default:
      return state;
  }
}

export default allTiles;
