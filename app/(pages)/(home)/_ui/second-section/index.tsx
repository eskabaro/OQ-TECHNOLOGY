'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Button } from '@/app/_shared/ui/button'
import { Article } from '@/app/_shared/ui/typography/article'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <SubTitle upTitle='PRODUCTS' title='OUR INNOVATION PRODUCTS' isButtonGroup auxiliaryBtn />
            <div className={styles.wrapper_slider}>
                <div className={styles.article}>
                    <Article
                        titleTag='h2'
                        title='OQ TrackMe'
                        paragraphs={[
                            'Designed by OQ Technology, the world’s first global satellite 5G IoT operator, OQ TrackMe is a compact personal and commercial GPS/GNSS tracker with cellular and satellite 5G IoT connectivity offering pre-paid data packages.',
                            'TrackMe can be powered through USB-C and is equipped with a 1000mAh battery, ensuring up to 72 hours of backup. This makes it an ideal companion for hikers, climbers, mountaineers and seafarers.',
                            'Safety during emergencies is ensured by pressing the SOS button, which allows users to instantly transmit their location information to rescue and support services.'
                        ]}
                    />
                    <div className={styles['article_btn-box']}>
                        <Button variant='short'>ORDER NOW</Button>
                        <Button variant='short' withoutBg>
                            DOWNLOAD DATASHEET
                        </Button>
                    </div>
                </div>

                <Image src='/home/innovation/slide-1.webp' height={666} width={773} priority alt='' />
            </div>
        </Container>
    )
}
