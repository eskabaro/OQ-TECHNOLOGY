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
        subTitile: 'High QoS and Security, ensure business continuity'
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
        subTitile: 'Connectivity for the environment and monitoring of pollutants, mining equipment’s, wastewater and greenhouse emissions.'
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
            "Designed by OQ TECHNOLOGY, the world's first global satellite 50 IoT operator, OQ ONE is a flexible, rugged, and programmable IoT terminal offering pre-paid data packages, This terminal is specifically designed for remote monitoring and controlling Of both fixed and mobile assets across various industries such as transportation, oil and gas, utilities, maritime, agriculture, and more. ",
            'Capable of connecting up to 1000 sensors, OQ ONE provides extensive connectivity options. Moreover, it is powered by a long-lasting battery that keeps it operational for several years. The simplicity of its use underscores the smart design of OQ ONE, marking it one of the most innovative products in the satellite technology spectrum.'
        ],
        imgSrc: require('../_assets/innovation/slide-1.webp')
    },
    {
        id: 2,
        title: 'OQ Track Me',
        paragraphs: [
            'Designed by OQ Technology, the world’s first global satellite 5G IoT operator, OQ TrackMe is a compact personal and commercial GPS/GNSS tracker with cellular and satellite 5G IoT connectivity offering pre-paid data packages.',
            'TrackMe can be powered through USB-C and is equipped with a 1000mAh battery, ensuring up to 72 hours of backup. This makes it an ideal companion for hikers, climbers, mountaineers and seafarers.',
            'Safety during emergencies is ensured by pressing the SOS button, which allows users to instantly transmit their location information to rescue and support services.'
        ],
        imgSrc: require('../_assets/innovation/slide-2.webp')
    },
    {
        id: 3,
        title: 'Multimode LTE-M / NB-IoT / Satellite /GNSS SoC',
        paragraphs: [
            'The module offers comprehensive connectivity capabilities including the new NTN (Non-Terrestrial Networks) satellite capability specified by 3GPP. With complete hardware and software ownership, we ensure long-term device availability and support.',
            'Designed for applications requiring continuous network connectivity, the module leverages the new 3GPP Release 17 features to ensure seamless coverage across the globe.  On top of the satellite connectivity, the module supports terrestrial LTE  Cat M1 and LTE Cat NB2 optimized for IoT applications.',
            'It boasts enhancements in power consumption, coverage, data rate, and mobility. The GNSS receiver delivers best in class positioning data concurrent with the LTE communication making it ideal solution for continuous or cyclic tracking applications. The module is only available in large orders.'
        ],
        imgSrc: require('../_assets/innovation/slide-3.webp')
    }
]
