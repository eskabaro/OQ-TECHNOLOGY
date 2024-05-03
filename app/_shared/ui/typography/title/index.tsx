'use client'

import { FC } from 'react'
import cn from 'classnames'

import { HeadingAnimate } from '../../heading-animate'
import { Text } from '../text'

import styles from './Title.module.scss'

export type SizesType = 'L' | 'XL' | 'XXL'

interface ITitleProps {
    size: SizesType
    title: string
    text?: string
    isObserver?: boolean
    className?: string
}

export const Title: FC<ITitleProps> = ({ size, title, text, isObserver, className }) => {
    return (
        <div className={cn(styles.heading, className)}>
            <HeadingAnimate isObserver={isObserver}>
                <Text className={cn([styles[size]])} as='h1'>
                    {title}
                </Text>
            </HeadingAnimate>
            {text && (
                <HeadingAnimate isObserver={isObserver} duration={200}>
                    <Text className={cn([styles[size]])} as='p'>
                        {text}
                    </Text>
                </HeadingAnimate>
            )}
        </div>
    )
}
