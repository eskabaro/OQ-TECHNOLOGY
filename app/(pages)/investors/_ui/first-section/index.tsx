'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Article } from '@/app/_shared/ui/typography/article'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <Title isObserver size='XXL' title='INVESTORS' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />
            <div className={styles.wrapper_content}>
                <Article
                    size='XL'
                    titleTag='h2'
                    title='WE TRUSTED BY THE BEST'
                    paragraphs={[
                        'Massa quisque erat urna nisi turpis est magna proin. Proin felis elementum elementum volutpat vel enim enim gravida. Aliquam ultricies purus vestibulum tincidunt. Dis feugiat donec ut mattis. Ut in eget consectetur varius tincidunt id. Aliquet dui congue proin pretium quam.',
                        'Dui porttitor arcu cras sed non. At sed scelerisque dictumst eu iaculis blandit arcu erat auctor. Commodo maecenas pellentesque mauris eu id tempor. Eu risus duis purus turpis mauris nulla cursus. Faucibus pellentesque orci risus ultricies sed turpis elementum.'
                    ]}
                />
                <div className={styles['images-net']}>
                    <Image src={'/investors/1.webp'} width={725} height={250} alt='' priority />
                    <Image src={'/investors/2.webp'} width={228} height={250} alt='' priority />
                    <Image src={'/investors/3.webp'} width={228} height={250} alt='' priority />
                    <Image src={'/investors/4.webp'} width={228} height={250} alt='' priority />
                </div>
            </div>
        </Container>
    )
}
