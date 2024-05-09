'use client'

import { Children, FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/classnames'

import styles from './ButtonGroup.module.scss'

interface IButtonGroupProps extends PropsWithChildren<unknown> {
    size: 'L' | 'XL'
}

export const ButtonGroup: FC<IButtonGroupProps> = ({ size, children }) => {
    return (
        <ul className={styles.wrapper}>
            {Children.map(children, (child, index) => {
                return (
                    <li className={cn(styles.wrapper_item, styles[size])} key={index}>
                        {child}
                    </li>
                )
            })}
        </ul>
    )
}
