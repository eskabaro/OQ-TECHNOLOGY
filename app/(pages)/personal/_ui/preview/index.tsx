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
                    <Title
                        isObserver
                        size='XXL'
                        className={styles['left-side_title']}
                        title='OQ FOR INDIVIDUALS​'
                        text='Track your assets globally using our Non-Terrestrial Network (NTN) narrowband connectivity of Internet-of-Things (IoT)​'
                    />
                    <Image src={require('../../_assets/product.webp')} width={360} height={311} priority alt='' />
                    <div className={styles['left-side_btn-box']}>
                        <Button variant='short'>ORDER NOW</Button>
                        <Button withoutBg variant='short'>
                            BOOK A CONSULTATION
                        </Button>
                    </div>
                </div>
                <div className={styles['right-side']}>
                    <Image src={require('../../_assets/product.webp')} width={655} height={560} priority alt='' />
                </div>
            </Container>
        </section>
    )
}
