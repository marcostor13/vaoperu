import { createAction, props } from '@ngrx/store'

// GLOBAL
export const setdata = createAction('setdata', props<{ data: any }>())
export const setLoading = createAction('setloading', props<{ isLoading: boolean }>())
export const setCurrentRole = createAction('setCurrentRole', props<{ currentRole: string }>())


export const stateActions = {
    setdata,
    setLoading,
    setCurrentRole,
}