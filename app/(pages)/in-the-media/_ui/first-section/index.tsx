'use client'

import { FC } from 'react'

import { Text } from '@/app/_shared/ui/typography/text'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { VideoItem } from '@/app/(app)/_components/video-item'
import { video } from '../../const/video'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='h1'>OQ MEDIA</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='p'>Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.</Text>
                </HeadingAnimate>
            </div>

            <ul className={styles.wrapper_list}>
                {video.map((e) => (
                    <VideoItem key={e.id} {...e} />
                ))}
            </ul>
        </div>
    )
}
