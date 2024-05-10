'use client'

import { FC, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/app/_shared/lib/classnames'
import { Container } from '@/app/(app)/_components/container'
import { Button } from '@/app/_shared/ui/button'
import { Article } from '@/app/_shared/ui/typography/article'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { slides } from './const/slides'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0)

    return (
        <Container as='section' className={styles.wrapper}>
            <SubTitle
                auxiliaryBtn
                isButtonGroup
                upTitle='PRODUCTS'
                title='OUR INNOVATION PRODUCTS'
                nextSlideFn={() => setCurrentIdx((e) => (e + 1 >= slides.length ? 0 : e + 1))}
                prevSlideFn={() => setCurrentIdx((e) => (e <= 0 ? slides.length - 1 : e - 1))}
            />
            <div className={styles.wrapper_slider}>
                {slides.map((item, idx) => (
                    <div key={item.id} className={cn(styles.slide, currentIdx === idx && styles.active)}>
                        <div key={item.id} className={styles.article}>
                            <Article titleTag='h2' title={item.title} paragraphs={item.paragraphs} />
                            <div className={styles['article_btn-box']}>
                                <Button variant='short'>ORDER NOW</Button>
                                <Button variant='short' withoutBg>
                                    DOWNLOAD DATASHEET
                                </Button>
                            </div>
                        </div>

                        <div className={styles['image-box']}>
                            <Image src={item.imgSrc} height={666} width={773} priority alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
