'use client'

import { FC } from 'react'

import { HeadingAnimate } from '../../heading-animate'
import { Text } from '../text'

import styles from './Title.module.scss'

interface ITitleProps {
    title: string
    text?: string
}

export const Title: FC<ITitleProps> = ({ title, text }) => {
    return (
        <div className={styles.heading}>
            <HeadingAnimate>
                <Text as='h1'>{title}</Text>
            </HeadingAnimate>
            {text && (
                <HeadingAnimate duration={200}>
                    <Text as='p'>{text}</Text>
                </HeadingAnimate>
            )}
        </div>
    )
}
