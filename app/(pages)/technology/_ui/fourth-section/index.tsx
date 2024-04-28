'use client'

import { FC } from 'react'

import { Text } from '@/app/_shared/ui/typography/text'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { VideoItem } from '../video-item'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='p'>TECHNOLOGY</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='h1'>HIGH ALTITUDE PLATFORMS AND DRONES</Text>
                </HeadingAnimate>
            </div>
            <div className={styles.wrapper_video}>
                <VideoItem
                    imgSrc='/technology/video-1.webp'
                    title='5G Internet-of-Things through Satellites'
                    text='Ut sapien lectus ultrices luctus cras in malesuada. Egestas enim mattis amet in mi sem. At arcu blandit laoreet phasellus dictumst semper. Non ornare fusce faucibus tristique massa urna vulputate. Tempor vitae sit laoreet urna nam
                    commodo. Orci in senectus aliquet et.'
                />
                <VideoItem
                    imgSrc='/technology/video-2.webp'
                    title='OQ TECHNOLOGY - Cyril Picavez'
                    text='Semper maecenas enim elementum sit tellus scelerisque sagittis. Sagittis pretium mauris eget nunc nulla eros. Integer blandit sem ultrices ut lectus. Porttitor lectus consequat augue risus est aenean. Hac convallis egestas tincidunt ac blandit. Ipsum odio dui sit tempus tellus.'
                />
            </div>
        </div>
    )
}
