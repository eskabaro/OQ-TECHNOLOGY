'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Article } from '@/app/_shared/ui/typography/article'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <SubTitle
                upTitle='SATELLITE IOT MARKET TO REACH US$10.4 BILLION BY 2035​'
                title='MARKET OPPORTUNITY'
            />
            <div className={styles.wrapper_content}>
                <div className={styles['left-side']}>
                    <Image src={require('../../_assets/market-opportunity.webp')} width={725} height={250} alt='' priority />
                </div>
                <div className={styles['right-side']}>
                    <Article
                        titleIcon='star'
                        title='Market Forecast​'
                        paragraphs={[
                            '• OQ Technology is well positioned to address the Satellite IoT Direct-to-Device market already in 2024 with its 10 satellites in orbit.​',
                            '• OQ Technology’s short-term growth will be driven by real-time IoT applications, requiring the completion of the full satellite constellation.​',
                            '• OQ Technology’s business plan reasonably targets a market share of the Satellite IoT Direct-to-Device market of 5% to 10% by 2035.​',
                            '• OQ Technology’s long-term growth will be fuelled by the demand for Satellite Direct-to-Mobile services estimated at US$19.9 billion.',
                        ]}
                    />
                </div>
            </div>
        </Container>
    )
}
