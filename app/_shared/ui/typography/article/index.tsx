'use client'

import { FC } from 'react'
import cn from 'classnames'

import { Text } from '../text'

import styles from './Article.module.scss'

type TitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type SizeType = 'L' | 'XL'

interface IArticleProps {
    title: string
    paragraphs: string[]
    titleTag?: TitleTagType
    size?: SizeType
}

export const Article: FC<IArticleProps> = ({ title, paragraphs, titleTag, size }) => {
    return (
        <div className={cn(styles.wrapper, styles[size!])}>
            <Text as={titleTag || 'h1'}>{title}</Text>
            {paragraphs.map((e) => (
                <Text key={e} as='p'>
                    {e}
                </Text>
            ))}
        </div>
    )
}
