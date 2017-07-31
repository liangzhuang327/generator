import Immutable from 'immutable';
import { genAction } from '../../utils';

const $$initialState = Immutable.fromJS({
    test:null,
    testData:{
        id:1,name:'工单',
        items:[{id:101,name:'工单1',account:10},{id:102,name:'工单2',account:20}],
        company:{first:'百度',second:'阿里',third:{name:'小公司',industry:'小行业'}}
    }
})

export default ($$state=$$initialState,action)=>{
    switch(action.type){
        case 'LZ_TEST':
            return $$state.merge({'test':action.payload});
        case 'LZ_TEST_IMMUTABLE':
            return $$state.setIn(['testData','items',2],action.payload);//此种方法的弊端就是你要知道数组的长度！！
            //return $$state.updateIn(['testData','items'],(list)=>list.push(action.payload)) //此处存在问题是，没点击新增一次都会push一次，数据数组会多一条重复数据，渲染时候key相同，也会只出现一个此条数据的card
        case 'LZ_TEST_IMMUTABLE_MERGE_DEEP_IN':
            // return $$state.updateIn(['testData','company'],(val)=>val.mergeDeep(action.payload));//此种方法是mergeDeepIn的内部实现
            return $$state.mergeDeepIn(['testData','company'],action.payload)
            //mergeDeepIn:层级对象的更新（或者叫层级对象的合并）
            //mergeIn:层级对象的替换，较mergeDeepIn来说，其不具备对层级对象的合并，只会替换，third这个对象整个被替换，并不会与老的third合并
        default:
            return $$state;
    }
}

export function test(value) {
    return function(dispatch){
        dispatch(genAction('LZ_TEST',value))
    }
}

export function testImmutable(value) {
    return function(dispatch){
        dispatch(genAction('LZ_TEST_IMMUTABLE',value))
    }
}

export function testImmutableMergeDeep(value) {
    return function(dispatch){
        dispatch(genAction('LZ_TEST_IMMUTABLE_MERGE_DEEP_IN',value))
    }
}