'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { VideoItem } from '@/app/(app)/_components/video-item'
import { Title } from '@/app/_shared/ui/typography/title'
import { videos } from '../../_const/videos'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container as='section'>
            <div className={styles.wrapper}>
                <Title
                    isObserver
                    size='XXL'
                    title='OQ MEDIA'
                    text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.'
                />

                <ul className={styles.wrapper_list}>
                    {videos.map((video) => (
                        <VideoItem key={video.id} {...video} />
                    ))}
                </ul>
            </div>
        </Container>
    )
}
