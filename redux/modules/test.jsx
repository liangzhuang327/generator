import Immutable from 'immutable';
import { genAction } from '../../utils';

const $$initialState = Immutable.fromJS({
    test:null
})

export default ($$state=$$initialState,action)=>{
    switch(action.type){
        case 'LZ_TEST':
            return $$state.merge({'test':action.payload});
        default:
            return $$state;
    }
}

export function test(value) {
    return function(dispatch){
        dispatch(genAction('LZ_TEST',value))
    }
}