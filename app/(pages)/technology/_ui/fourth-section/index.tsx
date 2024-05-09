'use client'

import { FC } from 'react'

import { SubTitle } from '@/app/_shared/ui/sub-title'
import { VideoItem } from '../video-item'
import { video } from '../../const/video'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <SubTitle upTitle='TECHNOLOGY' title='LEARN MORE FROM OUR PROFESSIONALS' />
            <ul className={styles.wrapper_video}>
                {video.map((e) => (
                    <VideoItem key={e.id} {...e} />
                ))}
            </ul>
        </div>
    )
}
