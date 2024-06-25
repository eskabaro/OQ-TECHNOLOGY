'use client'

import { FC } from 'react'

import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { videos } from '../../const/videos'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { VideoItem } from '../video-item'
import { Slider } from '@/app/(app)/_components/slider'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    const { onEmblaApiInit, onSliderScroll } = useScrollSlider()

    return (
        <div className={styles.wrapper}>
            <SubTitle
                upTitle='TECHNOLOGY'
                title='LEARN MORE FROM OUR PROFESSIONALS'
                isButtonGroup
                prevSlideFn={() => onSliderScroll('prev')}
                nextSlideFn={() => onSliderScroll('next')}
            />
            <Slider
                hasDots
                onEmblaApiInit={onEmblaApiInit}
                options={{
                    align: 'start',
                }}
            >
                {videos.map((video) => (
                    <VideoItem key={video.id} {...video} />
                ))}
            </Slider>
        </div>
    )
}
