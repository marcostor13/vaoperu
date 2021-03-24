import {  Action, createReducer, on } from '@ngrx/store';
import * as states from '../actions/setdata.actions';
import * as globalState from '../state/state';
import { cloneDeep } from 'lodash-es';

const reducer = createReducer(
    globalState.initialState,
    on(
        states.setdata, 
        (state: globalState.IStoreState, action: { data: any }): globalState.IStoreState => {            
            return {
                ...state,
                data: state.data
            }
        }
    ),
    on(
        states.setLoading,
        (state: globalState.IStoreState, action: { isLoading: string }): globalState.IStoreState => {            
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
    ),
    // on(
    //     states.setCreatingDataLanging,
    //     (state: globalState.IStoreState, action: { dataLanding: Landing }): globalState.IStoreState => {            
    //         return {
    //             ...state,
    //             landing: action.dataLanding
    //         }
    //     }
    // ), 
        
)

export function Reducer(state: globalState.IStoreState = globalState.initialState, action: Action) {
    return reducer(state, action);
}
