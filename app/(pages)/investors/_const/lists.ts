import { IListItem } from '@/app/(app)/_components/services-list/_const/list-item'

export const services: IListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/services/service-1.webp'),
        title: 'ONE NETWORK',
        subTitle: 'Truly global coverage, no coverage gaps, ultra-low, ultra-reliable latency​'
    },
    {
        id: 2,
        imgSrc: require('../_assets/services/service-2.webp'),
        title: 'ONE SIM',
        subTitle: 'Global roaming, no fragmented networks, operationally simple​'
    },
    {
        id: 3,
        imgSrc: require('../_assets/services/service-3.webp'),
        title: 'ONE STANDARD​',
        subTitle: 'Cellular 5g 3gpp compatible, wholesale mno model'
    }
]

export const slides = [
    {
        id: 1,
        title: '3GPP Standards',
        paragraphs: [
            '• Players following the 3rd Generation Partnership Project standard of 5G.​',
            '• Any 3GPP-compliant device with NTN capabilities can connect to OQ Technology’s network. Free from proprietary lock-ins, allows scalability and easy integration.​',
            '• OQ has more than 14 contributions to 3GPP NTN standards'
        ],
        imgSrc: require('../_assets/advantages/slide-1.webp')
    },
    {
        id: 2,
        title: 'Patents',
        paragraphs: [
            '• OQ Technology has been granted 9 NTN Patents (more in progress)​',
            '• Patents are part of company’s IP strategy, encompassing hardware ad software as well as payloads​',
            '• Protection and barrier to entry',
            '• OQ patent claims map into the 3GPP NTN standard'
        ],
        imgSrc: require('../_assets/advantages/slide-2.webp')
    },
    {
        id: 3,
        title: 'Operating on Regulated 5G Spectrum',
        paragraphs: [
            '• OQ has notified and brought-into-use own  ITU spectrum filings allowing the system to be used for premium enterprise, controlled applications that require high reliability and service quality without leasing expensive spectrum​'
        ],
        imgSrc: require('../_assets/advantages/slide-3.webp')
    },
    {
        id: 4,
        title: 'First-Mover Advantage',
        paragraphs: [
            '• OQ Technology boasts significant licenses & landing rights across Asia, Africa, Australia, and Europe. Licensing initiatives for the Americas are in progress​',
            '• OQ has the first-mover advantage having de-risked the technology and business since 2016.​'
        ],
        imgSrc: require('../_assets/advantages/slide-4.webp')
    }
]
