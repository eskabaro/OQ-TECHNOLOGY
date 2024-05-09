'use client'

import { FC } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { Text } from '../text'
import { Icon } from '../../icon'
import { IconsType } from '@/app/_shared/const/icons'

import styles from './Article.module.scss'

type TitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type SizeType = 'L' | 'XL'

interface IArticleProps {
    title: string
    paragraphs: string[]
    titleTag?: TitleTagType
    titleIcon?: IconsType
    size?: SizeType
}

export const Article: FC<IArticleProps> = ({ title, paragraphs, titleTag, size, titleIcon }) => {
    return (
        <div className={cn(styles.wrapper, styles[size!])}>
            <Text as={titleTag || 'h1'}>
                {titleIcon && <Icon name={titleIcon} />}
                {title}
            </Text>
            {paragraphs.map((e) => (
                <Text key={e} as='p'>
                    {e}
                </Text>
            ))}
        </div>
    )
}
