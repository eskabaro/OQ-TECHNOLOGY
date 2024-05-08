'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { Button } from '@/app/_shared/ui/button'
import { Article } from '@/app/_shared/ui/typography/article'
import { Container } from '@/app/(app)/_components/container'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='p'>ABOUT US</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='h1'>SPACE LEVEL</Text>
                </HeadingAnimate>
            </div>

            <div className={styles.wrapper_content}>
                <Image src={'/about-us/image-1.webp'} width={783} height={710} alt='' />
                <div className={styles.article}>
                    <Article
                        titleIcon='star'
                        title='Next-Gen Connectivity'
                        paragraphs={[
                            'Whether this is digital oilfield applications, offshore monitoring, SCADA applications, asset tracking, fleet management, smart metering, or predictive maintenance: We provide an innovative low-cost connectivity solution and high-value data analytics. Our wireless technology is compatible with existing cellular technologies (3GPP Release 17). The devices are plugged & play, easy to install, have long battery life, and connect you directly to our or your data cloud.',
                            'Using 5G technology, long business experience, and support from partners the company is providing both high-value and low-cost IoT connectivity solutions to customers. The company also provides intelligent custom-made solutions in the field of data analytics leveraging the power of our satellite constellation in space. We serve the Oil & Gas, Maritime, Industry 4.0, and Transport segments, particularly for the management and tracking of assets in remote areas.'
                        ]}
                    />
                    <div className={styles['article_btn-box']}>
                        <Button variant='short'>BOOK A TRIAL</Button>
                        <Button withoutBg variant='short'>
                            CONTACT US
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
