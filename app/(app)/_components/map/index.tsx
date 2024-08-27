'use client'

import { useEffect, useMemo, useState } from 'react'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useEntries } from '../entries-provider'
import { ICountry } from '@/app/api/contentful/countryApi'

import { IMapLegendItem } from './_ui/map-legend/_ui/map-legend-item'
import { MapLegend } from './_ui/map-legend'

import styles from './Map.module.scss'

interface IMapProps {
    legendItems: IMapLegendItem[]
}

export const Map: React.FC<IMapProps> = ({ legendItems }) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { countries } = useEntries()

    const availableCountries = useMemo(() => countries.filter((country) => country.fields.status === 'available'), [countries])
    const waitlistCountries = useMemo(() => countries.filter((country) => country.fields.status === 'waitlist'), [countries])

    useEffect(() => {
        mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN!

        const map = new mapboxgl.Map({
            container: 'map',
            style: process.env.MAPBOX_MAP_STYLE,
            center: [0, 0],
            zoom: 1,
            scrollZoom: false,
        })

        const highlightCountries = (id: string, fillColor: string, countries: ICountry[]) => {
            map.addLayer(
                {
                    id,
                    source: {
                        type: 'vector',
                        url: 'mapbox://mapbox.country-boundaries-v1'
                    },
                    'source-layer': 'country_boundaries',
                    type: 'fill',
                    paint: {
                        'fill-color': fillColor,
                        'fill-outline-color': 'rgba(255, 255, 255, 0.5)'
                    }
                },
                'country-label'
            )
            map.setFilter(id, ['in', 'name_en', ...countries.map((country) => country.fields.name)])
        }

        map.on('load', () => {
            highlightCountries('available-countries', '#FAA660', availableCountries)
            highlightCountries('waitlist-countries', '#AA8B3D', waitlistCountries)

            setIsMapLoaded(true)
        })
    }, [availableCountries, waitlistCountries])

    return (
        <div id='map' className={styles.map}>
            {isMapLoaded && <MapLegend items={legendItems} />}
        </div>
    )
}
