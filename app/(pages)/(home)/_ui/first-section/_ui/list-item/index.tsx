'use client'

import { FC } from 'react'
import Image from 'next/image'

import { IBusinessListItem, IModalData } from '@/app/(pages)/(home)/_const/lists'
import { Title } from '@/app/_shared/ui/typography/title'

import styles from './ListItem.module.scss'

interface IListItemProps extends IBusinessListItem {
    onModalOpen: (modalData: IModalData) => void;
}

export const ListItem: FC<IListItemProps> = ({ onModalOpen, imgSrc, title, subTitle, modalData }) => {
    return (
        <li className={styles.wrapper}>
            <Image src={imgSrc} width={520} height={280} alt={title} onClick={() => onModalOpen(modalData!)} />
            <Title size='L' className={styles.heading} title={title} text={subTitle} />
        </li>
    )
}
