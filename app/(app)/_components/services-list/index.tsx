'use client'

import { FC } from 'react'

import { IListItem } from './_const/list-item'
import { ServiceItem } from './_ui/service-item'

import styles from './ServicesList.module.scss'

interface IServicesListProps {
    services: IListItem[]
}

export const ServicesList: FC<IServicesListProps> = ({ services }) => {
    return (
        <ul className={styles.wrapper}>
            {services.map((service) => (
                <ServiceItem key={service.id} {...service} />
            ))}
        </ul>
    )
}
