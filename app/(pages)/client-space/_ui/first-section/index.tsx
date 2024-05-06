'use client'

import { FC, useState } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { documents } from './const/space-list'
import { DocumentItem } from './_ui/document-item'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0)

    return (
        <Container className={styles.wrapper} as='section'>
            <Title isObserver size='XXL' title='CLIENT SPACE' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />

            <div className={styles.wrapper_list}>
                {documents.map((e, i) => (
                    <DocumentItem key={e.id} index={i} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} {...e} />
                ))}
            </div>
        </Container>
    )
}
