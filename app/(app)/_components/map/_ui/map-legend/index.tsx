'use client'

import { FC } from 'react'

import { Text } from '@/app/_shared/ui/typography/text'
import { IMapLegendItem, MapLegendItem } from './_ui/map-legend-item'

import styles from './MapLegend.module.scss'

interface IMapLegendProps {
    title: string
    items: IMapLegendItem[]
}

export const MapLegend: FC<IMapLegendProps> = ({ title, items }) => {
    return (
        <div className={styles.map_legend}>
            <Text as='h3'>{title}</Text>
            <div className={styles.map_legend_group}>
                {items.map((item) => (
                    <MapLegendItem key={item.text} color={item.color} text={item.text} />
                ))}
            </div>
        </div>
    )
}
