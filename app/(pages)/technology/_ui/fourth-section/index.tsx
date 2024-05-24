'use client'

import { FC } from 'react'

import { videos } from '../../const/videos'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { VideoItem } from '../video-item'
import { Slider } from '@/app/(app)/_components/slider'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <SubTitle upTitle='TECHNOLOGY' title='LEARN MORE FROM OUR PROFESSIONALS' />
            <Slider>
                {videos.map((video) => (
                    <VideoItem key={video.id} {...video} />
                ))}
            </Slider>
        </div>
    )
}
