'use client'

import { FC } from 'react'

import { Text } from '@/app/_shared/ui/typography/text'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { VideoItem } from '../video-item'
import { video } from '../../const/video'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='p'>TECHNOLOGY</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='h1'>LEARN MORE FROM OUR PROFESSIONALS</Text>
                </HeadingAnimate>
            </div>
            <ul className={styles.wrapper_video}>
                {video.map((e) => (
                    <VideoItem key={e.id} {...e} />
                ))}
            </ul>
        </div>
    )
}
