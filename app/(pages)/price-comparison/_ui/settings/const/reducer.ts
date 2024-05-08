import { IInitialState, RangeAction, RangeEnum } from './interfaces'

export const reducer = (state: IInitialState, { type, payload }: RangeAction) => {
    switch (type) {
        case RangeEnum.RANGE_FIRST:
            return { ...state, [RangeEnum.RANGE_FIRST]: payload }
        case RangeEnum.RANGE_SECOND:
            return { ...state, [RangeEnum.RANGE_SECOND]: payload }
        case RangeEnum.RANGE_THIRD:
            return { ...state, [RangeEnum.RANGE_THIRD]: payload }
        default:
            return state
    }
}
