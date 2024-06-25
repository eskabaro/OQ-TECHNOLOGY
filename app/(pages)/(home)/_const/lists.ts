export interface IListItem {
    id: number
    imgSrc: string
    title: string
    subTitile: string
}

export const servicesList: IListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/services/service-1.webp'),
        title: 'STANDARD​',
        subTitile: 'Compatible with 3GPP standard Rel. 17 – No proprietary tech lock-up​'
    },
    {
        id: 2,
        imgSrc: require('../_assets/services/service-2.webp'),
        title: 'ANYWHERE​',
        subTitile: 'Connect almost any site on land or sea'
    },
    {
        id: 3,
        imgSrc: require('../_assets/services/service-3.webp'),
        title: 'RELIABLE',
        subTitile: 'High Quility of Service and Security, ensure business continuity'
    }
]

export const businessList: IListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/business/1.webp'),
        title: 'ENERGY & UTILITIES',
        subTitile: 'Connectivity for automation, predictive maintenance, and the digital oil field applications​'
    },
    {
        id: 2,
        imgSrc: require('../_assets/business/2.webp'),
        title: 'MARITIME​',
        subTitile: 'Connectivity for ships, containers, and buoys'
    },
    {
        id: 3,
        imgSrc: require('../_assets/business/3.webp'),
        title: 'SUSTAINABILITY',
        subTitile: 'Connectivity for the environment and monitoring of pollutants, mining equipment, wastewater and greenhouse emissions.'
    },
    {
        id: 4,
        imgSrc: require('../_assets/business/4.webp'),
        title: 'LOGISTICS',
        subTitile: 'Connectivity for mobility and asset tracking'
    },
    {
        id: 5,
        imgSrc: require('../_assets/business/5.webp'),
        title: 'AGRICULTURE',
        subTitile: 'Connectivity for the smart agritech and livestock monitoring'
    },
    {
        id: 6,
        imgSrc: require('../_assets/business/6.webp'),
        title: 'SECURITY',
        subTitile: 'Connectivity for safety, asset protection,  and law enforcement'
    }
]

export const slides = [
    {
        id: 1,
        title: 'OQ ONE',
        paragraphs: [
            '0Q ONE is a flexible, rugged, and programmable IoT terminal offering pre-paid data packages, This terminal is specifically designed for remote monitoring and controlling of both fixed and mobile assets across various industries such as transportation, oil and gas, utilities, maritime, agriculture, and more.'
        ],
        imgSrc: require('../_assets/innovation/slide-1.webp'),
        buttonText: 'ORDER NOW A DEMO KIT',
    },
    {
        id: 2,
        title: 'OQ TrackME',
        paragraphs: [
            '0Q TrackME is a compact personal and commercial GPS/GNSS tracker with cellular and satellite 5G IoT connectivity offering pre-paid data packages and equipped with long life battery. This makes it an ideal companion for hikers, climbers, mountaineers and seafarers. Panic button also included.'
        ],
        imgSrc: require('../_assets/innovation/slide-2.webp'),
        buttonText: 'ORDER NOW',
    },
    {
        id: 3,
        title: 'Multimode LTE-M / NB-IoT / Satellite / GNSS SoC',
        paragraphs: [
            'Designed for applications requiring continuous network connectivity, the module leverages the new 3GPP Release 17 features to ensure seamless coverage across the globe. On top of the satellite connectivity, the module supports terrestrial LTE Cat Ml and LTE Cat NB2 optimized for IoT applications.'
        ],
        imgSrc: require('../_assets/innovation/slide-3.webp'),
        buttonText: 'ORDER NOW',
    }
]
