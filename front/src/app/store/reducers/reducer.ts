import {  Action, createReducer, on } from '@ngrx/store';
import * as states from '../actions/setdata.actions';
import * as globalState from '../state/state';
import { ICart } from '@shared/interfaces/cart.interfaces';

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
        (state: globalState.IStoreState, action: { isLoading: boolean }): globalState.IStoreState => {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
    ),
    on(
        states.setCurrentRole,
        (state: globalState.IStoreState, action: { currentRole: string }): globalState.IStoreState => {
            return {
                ...state,
                currentRole: action.currentRole
            }
        }
    ),
    on(
        states.setCart,
        (state: globalState.IStoreState, action: { cart: ICart }): globalState.IStoreState => {
            return {
                ...state,
                cart: action.cart
            }
        }
    ),
    on(
        states.setPlatform,
        (state: globalState.IStoreState, action: { platform: string }): globalState.IStoreState => {
            return {
                ...state,
                platform: action.platform
            }
        }
    ),

)

export function Reducer(state: globalState.IStoreState = globalState.initialState, action: Action) {
    return reducer(state, action);
}
