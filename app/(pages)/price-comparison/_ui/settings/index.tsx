'use client'

import { FC, Reducer, useReducer } from 'react'

import { IInitialState, RangeAction, RangeEnum } from './const/interfaces'
import { reducer } from './const/reducer'

import { RangeItem } from './_ui/range-item'
import { RadiosBlock } from './_ui/radios-block'

import styles from './Settings.module.scss'

export const initialState = {
    [RangeEnum.RANGE_FIRST]: 0,
    [RangeEnum.RANGE_SECOND]: 0,
    [RangeEnum.RANGE_THIRD]: 0
}

export const Settings: FC = () => {
    const [state, dispatch] = useReducer<Reducer<IInitialState, RangeAction>>(reducer, initialState)

    return (
        <div className={styles.wrapper}>
            <RangeItem title='1. Number of devices will be connected via satellite' state={state} dispatch={dispatch} name={RangeEnum.RANGE_FIRST} />
            <hr />
            <RangeItem title='2. Number of devices will be connected via satellite' state={state} dispatch={dispatch} name={RangeEnum.RANGE_SECOND} />
            <hr />
            <RangeItem title='3. Number of devices will be connected via satellite' state={state} dispatch={dispatch} name={RangeEnum.RANGE_THIRD} />
            <hr />
            <RadiosBlock />
        </div>
    )
}
