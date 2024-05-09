'use client'

import { FC } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
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
            {isObserver ? (
                <HeadingAnimate>
                    <Text className={styles[size]} as='h1'>
                        {title}
                    </Text>
                </HeadingAnimate>
            ) : (
                <div>
                    <Text className={styles[size]} as='h1'>
                        {title}
                    </Text>
                </div>
            )}
            {text &&
                (isObserver ? (
                    <HeadingAnimate duration={200}>
                        <Text className={styles[size]} as='p'>
                            {text}
                        </Text>
                    </HeadingAnimate>
                ) : (
                    <div>
                        <Text className={styles[size]} as='p'>
                            {text}
                        </Text>
                    </div>
                ))}
        </div>
    )
}
