import { initialState } from '../index'

export interface RangeAction {
    type: RangeEnum
    payload: number
}

export enum RangeEnum {
    RANGE_FIRST = 'RANGE_FIRST',
    RANGE_SECOND = 'RANGE_SECOND',
    RANGE_THIRD = 'RANGE_THIRD'
}

export type IInitialState = typeof initialState
