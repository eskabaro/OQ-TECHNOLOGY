'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='p'>TECHNOLOGY</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='h1'>SAT-CP</Text>
                </HeadingAnimate>
            </div>
            <div className={styles['wrapper_box']}>
                <div className={styles.box}>
                    <Text as='h2'>How does it work?</Text>
                    <Text as='p'>
                        Designed by OQ Technology, the world’s first global satellite 5G IoT operator, OQ TrackMe is a Using a global constellation of low earth orbit Nanosatellites and GEO orbit large satellites, we can provide coverage anywhere in
                        the world. The network is composed of OQ's own LEO satellites and partner GEO satellites.
                    </Text>
                    <Text as='p'>This way we can access any region on Earth and fill the coverage gaps. The user is provided ubiquitous cellular connectivity roaming between terrestrial, LEO, and GEO networks.</Text>
                    <Text as='p'>
                        We take care of the handover. Unlike Elon Musk’s Starlink which is used for broadband video and internet, our radio air-link is compatible with Narrowband IoT (NB-IoT) which was standardized in 3GPP Release 13 and is
                        considered for 5G massive machine communication. We have published patents on how to make NB-IoT works over satellites.
                    </Text>
                </div>
                <Image src={'/technology/sat.webp'} width={773} height={500} alt='' />
            </div>
            <div className={styles['wrapper_box']}>
                <Image src={'/technology/sat-2.webp'} width={773} height={500} alt='' />
                <div className={styles.box}>
                    <Text as='h2'>How does it work?</Text>
                    <Text as='p'>
                        We are licensing our space network globally and use licensed frequency bands, this way you do not need to worry about interference, quality of service, and security threats, unlike other unlicensed satellite IoT networks.
                        Moreover, our frequency bands are compatible with mobile bands so your cellular device radio can work on our satellites with no modification!
                    </Text>
                </div>
            </div>
        </div>
    )
}
