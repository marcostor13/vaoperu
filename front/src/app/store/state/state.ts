
import { ICart } from '@shared/interfaces/cart.interfaces'

export interface IStoreState {
    data: any
    isLoading: boolean
    currentRole: string
    cart: ICart
    platform: string
    urlBack: string
}

const initialCart = {
    profileProviderId: '',
    userId: '',
    items: []
}

export const initialState: IStoreState = {
    data: {},
    isLoading: false,
    currentRole: '1',
    cart: {
        profileProviderId: '',
        userId: '',
        items: []
    },
    platform: '',
    urlBack: ''
}
