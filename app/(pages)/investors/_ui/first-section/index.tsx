'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Article } from '@/app/_shared/ui/typography/article'
import { Button } from '@/app/_shared/ui/button'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <div className={styles.wrapper_header}>
                <Title
                    isObserver
                    size='XXL'
                    title='INVESTORS'
                    text='Looking for both strategic and financial VCs to power our scale-up. Join 5G Ventures and Waed on this journey about OQ.'
                />
                <Button withoutBg variant='short'>
                    CONTACT US
                </Button>
            </div>

            <div className={styles.wrapper_content}>
                <div className={styles['left-side']}>
                    <Article
                        size='L'
                        titleTag='h2'
                        title='OQ TECHNOLOGY’S MISSION'
                        paragraphs={[
                            'OQ Technology’s mission aims at unlocking a large untapped IoT Direct-to-Device market estimated at US$10.4 billion* by 2035 thanks to its disruptive 5G IoT ecosystem, already serving well-known customers.',
                            'Once successfully established into the 5G IoT market, OQ Technology’s future roadmap is to upgrade its technology and satellites to address a larger untapped market, that of the Direct-to-Mobile connectivity estimated at US$ 19.9 billion* providing messaging and voice services to mobile phones and wearables globally.'
                        ]}
                    />
                    <div className={styles['left-side_images']}>
                        <Image src={require('../../_assets/partner-1.webp')} width={268} height={127} alt='' priority />
                        <Image src={require('../../_assets/partner-2.webp')} width={268} height={127} alt='' priority />
                    </div>
                </div>
                <div className={styles['right-side']}>
                    <Image src={require('../../_assets/1.webp')} width={725} height={250} alt='' priority />
                    <Image src={require('../../_assets/2.webp')} width={228} height={250} alt='' priority />
                    <Image src={require('../../_assets/3.webp')} width={228} height={250} alt='' priority />
                    <Image src={require('../../_assets/4.webp')} width={228} height={250} alt='' priority />
                </div>
            </div>
        </Container>
    )
}
