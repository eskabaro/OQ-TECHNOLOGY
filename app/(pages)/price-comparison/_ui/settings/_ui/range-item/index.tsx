'use client'

import { Dispatch, FC } from 'react'

import { IInitialState, RangeAction, RangeEnum } from '../../const/interfaces'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './RangeItem.module.scss'

const minValue = 0
const maxValue = 15000

interface IRangeItemProps {
    dispatch: Dispatch<RangeAction>
    state: IInitialState
    name: RangeEnum
    title: string
}

export const RangeItem: FC<IRangeItemProps> = ({ state, dispatch, name, title }) => {
    const handleIncrementDecrement = (change: number) => {
        const newValue = state[name] + change

        if (newValue >= minValue && newValue <= maxValue) {
            dispatch({ type: name, payload: newValue })
        }
    }

    const getBackgroundColor = () => {
        const percent = (state[name] - 0) / (100 - 0)

        return `linear-gradient(90deg, #faa055 ${percent * 0.665}%, rgba(250, 160, 85, .2) ${percent * 0.665}%)`
    }

    return (
        <div className={styles.wrapper}>
            <Text as='h2'>{title}</Text>
            <div className={styles.wrapper_counter}>
                <input style={{ background: getBackgroundColor() }} className={styles.range} type='range' min={minValue} max={maxValue} value={state[name]} onChange={({ target }) => dispatch({ type: name, payload: parseInt(target.value) })} />
                <div className={styles['counter-controls']}>
                    <Text as='span'>{state[name]}</Text>
                    <div className={styles['btn-box']}>
                        <button onClick={() => handleIncrementDecrement(1)}>
                            <Icon name='counter-arrow' />
                        </button>
                        <button onClick={() => handleIncrementDecrement(-1)}>
                            <Icon name='counter-arrow' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
