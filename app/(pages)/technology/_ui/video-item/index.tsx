'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Icon } from '@/app/_shared/ui/icon'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './VideoItem.module.scss'

interface IVideoItemProps {
    imgSrc: string
    title: string
    text: string
}

export const VideoItem: FC<IVideoItemProps> = ({ imgSrc, title, text }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['wrapper_video-box']}>
                <Image src={imgSrc} width={774} height={450} alt={title} />
                <Icon name='play' />
            </div>
            <div className={styles.wrapper_heading}>
                <Text as='h2'>{title}</Text>
                <Text as='p'>{text}</Text>
            </div>
        </div>
    )
}
