'use client'

import { FC } from 'react'
import styles from './Third.module.scss'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'
import Image from 'next/image'

export const ThirdSection: FC = () => {
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

            <div className={styles.wrapper_content}>
                <div className={styles.box}>
                    <Text as='h2'>Technology Description</Text>
                    <Text as='p'>
                        OQ Technology developed the IP of cellular base station software and hardware that can function in power-limited non-terrestrial moving objects. Imagine the cell towers in the sky moving at more than 7 Km/s at distances of
                        hundreds of kilometers away.
                    </Text>
                    <Text as='p'>
                        This Base Station Box (the payload) can be fitted on LEO satellites, partner GEO hubs, or even HAPS and drones to provide instantaneous local or global 5G IoT coverage in poorly connected areas, or during disasters when
                        terrestrial networks are no longer available.
                    </Text>
                    <Text as='p'>Because we build our own software we can control the quality and capacity of the service to give our users the best and most secure experience.</Text>
                </div>

                <div className={styles['images-box']}>
                    <Image src={'/technology/ballon-1.webp'} width={630} height={280} alt='' />
                    <Image src={'/technology/ballon-2.webp'} width={630} height={280} alt='' />
                </div>
            </div>
        </div>
    )
}
