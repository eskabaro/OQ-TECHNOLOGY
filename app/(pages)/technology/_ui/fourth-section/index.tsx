'use client'

import { FC } from 'react'

import { videos } from '../../const/video'
import { Slider } from '@/app/(pages)/service-plans/_ui/plans/_ui/slider'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { VideoItem } from '../video-item'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <SubTitle upTitle='TECHNOLOGY' title='LEARN MORE FROM OUR PROFESSIONALS' />
            <Slider totalItemsCount={videos.length}>
                {videos.map((video) => (
                    <li key={video.id}>
                        <VideoItem {...video} />
                    </li>
                ))}
            </Slider>
        </div>
    )
}
