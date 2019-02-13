import { GET_BANNER } from '../actions/banner';
import { GET_TILES } from '../actions/tiles';
import { GET_FORMS } from '../actions/forms';
import { fulfilled, failed, pending } from '../lib/promiseMiddlewareTypes';

function loading(state = [], action: any): any {
    switch (action.type) {
        case fulfilled(GET_BANNER):
        case fulfilled(GET_TILES):
        case fulfilled(GET_FORMS):
        case failed(GET_BANNER):
        case failed(GET_TILES):
        case failed(GET_FORMS):
            return false;
        case pending(GET_BANNER):
        case pending(GET_TILES):
        case pending(GET_FORMS):
            return true;
        default:
            return state;
    }
}

export default loading;
