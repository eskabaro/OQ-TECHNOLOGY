'use client'

import { FC } from 'react'
import Image from 'next/image'

import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Article } from '@/app/_shared/ui/typography/article'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <SubTitle upTitle='TECHNOLOGY' title='SAT-CP' />
            <div className={styles['wrapper_box']}>
                <Article
                    titleTag='h2'
                    title='How does it work?'
                    paragraphs={[
                        "Designed by OQ Technology, the world’s first global satellite 5G IoT operator, OQ TrackME is a Using a global constellation of low earth orbit Nanosatellites and GEO orbit large satellites, we can provide coverage anywhere in the world. The network is composed of OQ's own LEO satellites and partner GEO satellites.",
                        'This way we can access any region on Earth and fill the coverage gaps. The user is provided ubiquitous cellular connectivity roaming between terrestrial, LEO, and GEO networks.',
                        'We take care of the handover. Unlike Elon Musk’s Starlink which is used for broadband video and internet, our radio air-link is compatible with Narrowband IoT (NB-IoT) which was standardized in 3GPP Release 13 and is considered for 5G massive machine communication. We have published patents on how to make NB-IoT works over satellites.'
                    ]}
                />
                <Image src={require('../../_assets/sat-1.webp')} width={773} height={500} alt='' />
            </div>
            <div className={styles['wrapper_box']}>
                <Image src={require('../../_assets/sat-2.webp')} width={773} height={500} alt='' />
                <Article
                    titleTag='h2'
                    title='Licensed Frequency Access'
                    paragraphs={[
                        'We are licensing our space network globally and use licensed frequency bands, this way you do not need to worry about interference, quality of service, and security threats, unlike other unlicensed satellite IoT networks. Moreover, our frequency bands are compatible with mobile bands so your cellular device radio can work on our satellites with no modification!'
                    ]}
                />
            </div>
        </div>
    )
}
