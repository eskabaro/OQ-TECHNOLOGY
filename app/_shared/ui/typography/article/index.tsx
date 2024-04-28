'use client'

import { FC } from 'react'
import { Text } from '../text'

import styles from './Article.module.scss'

type TitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IArticleProps {
    title: string
    paragraphs: string[]
    titleTag?: TitleTagType
}

export const Article: FC<IArticleProps> = ({ title, paragraphs, titleTag }) => {
    return (
        <div className={styles.wrapper}>
            <Text as={titleTag || 'h1'}>{title}</Text>
            {paragraphs.map((e) => (
                <Text key={e} as='p'>
                    {e}
                </Text>
            ))}
        </div>
    )
}
