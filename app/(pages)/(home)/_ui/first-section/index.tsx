'use client'

import { FC, useState } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { businessList, IModalData, servicesList } from '../../_const/lists'
import { ListItem } from './_ui/list-item'
import { ServiceItem } from './_ui/service-item'
import { ListItemModal } from './_ui/list-item-modal'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedModalData, setSelectedModalData] = useState<IModalData | null>(null)

    const handleModalOpen = (modalData: IModalData) => {
        setIsModalOpen(true)
        setSelectedModalData(modalData)
    }

    return (
        <Container as='section' className={styles.wrapper}>
            <ul className={styles.wrapper_services}>
                {servicesList.map((e) => (
                    <ServiceItem key={e.id} {...e} />
                ))}
            </ul>

            <div className={styles.wrapper_content}>
                <Title
                    id='solutions'
                    isObserver
                    size='XL'
                    className={styles.wrapper_heading}
                    title='KEEP YOUR BUSINESS CONNECTED AND WELL MANAGED'
                    text='Connect your IoT devices, machines, and people anywhere, even in the most remote locations and harshest environments​'
                />

                <ul className={styles.wrapper_list}>
                    {businessList.map((item) => (
                        <ListItem key={item.id} onModalOpen={handleModalOpen} {...item} />
                    ))}
                </ul>
            </div>
            <ListItemModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                {...selectedModalData!}
            />
        </Container>
    )
}
