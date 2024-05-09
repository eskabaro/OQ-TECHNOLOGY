'use client'

import { Dispatch, FC, SetStateAction } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { IDocument } from '../../const/space-list'
import { Title } from '@/app/_shared/ui/typography/title'
import { Button } from '@/app/_shared/ui/button'

import styles from './DocumentItem.module.scss'

interface IDocumentItemProps extends IDocument {
    index: number
    currentIdx: number
    setCurrentIdx: Dispatch<SetStateAction<number>>
}

export const DocumentItem: FC<IDocumentItemProps> = ({ title, subTitle, index, currentIdx, setCurrentIdx }) => {
    return (
        <div onClick={() => setCurrentIdx(index)} className={cn(styles.wrapper, index === currentIdx && styles.active)}>
            <Title size='L' title={title} text={subTitle} />
            <Button variant='short'>DOWNLOAD NOW</Button>
        </div>
    )
}
