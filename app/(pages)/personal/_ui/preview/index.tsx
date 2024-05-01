'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Button } from '@/app/_shared/ui/button'

import styles from './Preview.module.scss'

export const Preview: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_container}>
                <div className={styles['left-side']}>
                    <Title className={styles['left-side_title']} title='OQ FOR INDIVIDUALS​' text='Track Your Assets Globally Using Our Non-Terrestrial Network (NTN) narrowband connectivity for Internet-of-Things (IoT)​' />
                    <div className={styles['left-side_btn-box']}>
                        <Button variant='short'>ORDER NOW</Button>
                        <Button withoutBg variant='short'>
                            DOWNLOAD DATASHEET
                        </Button>
                    </div>
                </div>
                <div className={styles['right-side']}>
                    <Image src='/personal/img.webp' width={655} height={560} priority alt='' />
                </div>
            </Container>
        </section>
    )
}
