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
                <Title size='XXL' title='OQ FOR BUSINESS​' text='Is the world’s first global satellite 5G IoT operator providing uninterrupted cellular coverage for your assets and machines anywhere on the planet.' />
                <div className={styles['btn-box']}>
                    <Button variant='short'>ORDER A DEMO KIT</Button>
                    <Button withoutBg variant='short'>
                        BOOK A CONSULTATION
                    </Button>
                </div>
            </Container>
        </section>
    )
}
