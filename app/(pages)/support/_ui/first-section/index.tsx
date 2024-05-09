'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Text } from '@/app/_shared/ui/typography/text'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Accordion } from '@/app/_shared/ui/accordion'
import { accordions } from '../../const/accordions'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <Title isObserver size='XXL' title='SUPPORT' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />

            <div className={styles['accordions-box']}>
                <div className={styles['accordions-box_heading']}>
                    <HeadingAnimate>
                        <Text as='p'>SUPPORT</Text>
                    </HeadingAnimate>
                    <HeadingAnimate duration={200}>
                        <Text as='h1'>FREQUENTLY ASKED QUESTIONS</Text>
                    </HeadingAnimate>
                </div>
                <div className={styles['accordions-box_wrapper']}>
                    <div>
                        {accordions.slice(0, Math.ceil(accordions.length / 2)).map((e) => (
                            <Accordion key={e.id} title={e.title}>
                                {e.text}
                            </Accordion>
                        ))}
                    </div>
                    <hr className={styles.border} />
                    <div>
                        {accordions.slice(Math.ceil(accordions.length / 2)).map((e) => (
                            <Accordion key={e.id} title={e.title}>
                                {e.text}
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}
