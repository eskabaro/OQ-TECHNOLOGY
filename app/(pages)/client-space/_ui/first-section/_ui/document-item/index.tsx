'use client'

import { Dispatch, FC, SetStateAction } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { IDocument } from '../../const/space-list'
import { Button } from '@/app/_shared/ui/button'

import styles from './DocumentItem.module.scss'
import { Icon } from '@/app/_shared/ui/icon'

interface IDocumentItemProps extends IDocument {
    index: number
    currentIdx: number
    setCurrentIdx: Dispatch<SetStateAction<number>>
}

export const DocumentItem: FC<IDocumentItemProps> = ({ title, subTitle, index, currentIdx, setCurrentIdx }) => {
    return (
        <div onClick={() => setCurrentIdx(index)} className={cn(styles.wrapper, index === currentIdx && styles.active)}>
            <div className={styles.heading}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subTitle}>{subTitle}</p>
            </div>
            <Button variant='rounded'>
                <Icon name='download' />
            </Button>
        </div>
    )
}
