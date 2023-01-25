import { createAction, props } from '@ngrx/store'
import { ICart } from '@shared/interfaces/cart.interfaces'

// GLOBAL
export const setdata = createAction('setdata', props<{ data: any }>())
export const setLoading = createAction('setloading', props<{ isLoading: boolean }>())
export const setCurrentRole = createAction('setCurrentRole', props<{ currentRole: string }>())
export const setCart = createAction('setCart', props<{ cart: ICart }>())
export const setPlatform = createAction('setPlatform', props<{ platform: string }>())
export const setUrlBack = createAction('setUrlBack', props<{ urlBack: string }>())


export const stateActions = {
    setdata,
    setLoading,
    setCurrentRole,
    setCart,
    setPlatform,
    setUrlBack
}
