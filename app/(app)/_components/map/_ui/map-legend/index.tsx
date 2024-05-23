'use client'

import { FC } from 'react'

import { IMapLegendItem, MapLegendItem } from './_ui/map-legend-item'

import styles from './MapLegend.module.scss'

interface IMapLegendProps {
    items: IMapLegendItem[]
}

export const MapLegend: FC<IMapLegendProps> = ({ items }) => {
    return (
        <div className={styles.map_legend}>
            <div className={styles.map_legend_group}>
                {items.map((item) => (
                    <MapLegendItem key={item.text} color={item.color} text={item.text} />
                ))}
            </div>
        </div>
    )
}
