import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import {AppDispatch, RootState} from '../store/store'

export const useDispatchHook = () => useDispatch<AppDispatch>()
export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector