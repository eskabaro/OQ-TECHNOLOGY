'use client'

import { FC } from 'react'

import { VideoItem } from '@/app/(app)/_components/video-item'
import { Title } from '@/app/_shared/ui/typography/title'
import { video } from '../../const/video'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Title size='XXL' title='OQ MEDIA' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />

            <ul className={styles.wrapper_list}>
                {video.map((e) => (
                    <VideoItem key={e.id} {...e} />
                ))}
            </ul>
        </div>
    )
}
