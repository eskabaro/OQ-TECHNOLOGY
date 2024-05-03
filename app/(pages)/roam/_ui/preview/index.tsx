'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Button } from '@/app/_shared/ui/button'

import styles from './Preview.module.scss'

export const Preview: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_container}>
                <Title size='XXL' title='OQ FOR MNOS/MVNOS​' text='Enable global roaming for your users over our NTN satellite constellation' />
                <div className={styles['btn-box']}>
                    <Button withoutBg variant='short'>
                        BOOK A CONSULTATION
                    </Button>
                </div>
            </Container>
        </section>
    )
}
