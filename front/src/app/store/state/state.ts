


export interface IStoreState {
    data: any
    isLoading: boolean
    currentRole: string
}

export const initialState: IStoreState = {
    data: {}, 
    isLoading: false,    
    currentRole: null
};
