import { IListItem } from "@/app/(app)/_components/services-list/_const/list-item"

export interface IModalData {
    mediaPath: string
    title: string
    description: string
}

export interface IBusinessListItem extends IListItem {
    modalData: IModalData
}

export const servicesList: IListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/services/service-1.webp'),
        title: 'STANDARD​',
        subTitle: 'Compatible with 3GPP standard Rel. 17 – No proprietary tech lock-up​'
    },
    {
        id: 2,
        imgSrc: require('../_assets/services/service-2.webp'),
        title: 'ANYWHERE​',
        subTitle: 'Connect almost any site on land or sea'
    },
    {
        id: 3,
        imgSrc: require('../_assets/services/service-3.webp'),
        title: 'RELIABLE',
        subTitle: 'High Quality of Service and Security, ensure business continuity'
    }
]

export const businessList: IBusinessListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/business/1.webp'),
        title: 'ENERGY & UTILITIES',
        subTitle: 'Connectivity for automation, predictive maintenance, and the digital oil field applications​',
        modalData: {
            mediaPath: '/videos/smart-energy.mp4',
            title: 'SMART ENERGY',
            description:
                'Our solution enables you to run your operations efficiently, and at full capacity and avoid disruption or loss of assets by giving you full access remotely to manage your applications. This includes SCADA systems, pipeline monitoring, and leak detection, predictive maintenance reports of machinery and windmills, inventory and asset tracking, mining, environmental monitoring, oilfields monitoring, tracking of workers and their well-being, and finally industrial smart metering.'
        }
    },
    {
        id: 2,
        imgSrc: require('../_assets/business/2.webp'),
        title: 'MARITIME​',
        subTitle: 'Connectivity for ships, containers, and buoys',
        modalData: {
            mediaPath: '/videos/smart-ocean.mp4',
            title: 'SMART OCEAN',
            description:
                'Maritime connectivity today is limited to expensive satellite VSAT and M2M high-end terminals, this is not suitable for IoT data collection and control. We help you to track fishing boats, smart nets, weather buoys, and commercial containers. In addition to that we can provide real-time tracking solutions for transport ships and yachts. Finally managing sensors and devices on offshore rigs, underwater pipes and oil wells have never been easier, all using a highly secure and reliable system.'
        }
    },
    {
        id: 3,
        imgSrc: require('../_assets/business/3.webp'),
        title: 'SUSTAINABILITY',
        subTitle: 'Connectivity for the environment and monitoring of pollutants, mining equipment, wastewater and greenhouse emissions.',
        modalData: {
            mediaPath: '/videos/smart-mobility.mp4',
            title: 'SMART CITIES',
            description:
                'Connected smart vehicles/drones are entering the market and offer companies the chance to deliver goods further and in more efficient ways. Tracking of fleets and goods is not possible outside cities where no cellular coverage is available. OQ offers an end-to-end satellite 5G integrated solution that allows you to monitor your assets and fleet in real time, anywhere they may go. We can also support bi-directional communication to machines such as banking ATMs in poor connectivity areas. We provide a dual satellite-terrestrial solution that can switch automatically between our and partner networks.'
        }
    },
    {
        id: 4,
        imgSrc: require('../_assets/business/4.webp'),
        title: 'LOGISTICS & TELEMATICS',
        subTitle: 'Connectivity for mobility and asset tracking',
        modalData: {
            mediaPath: '/videos/smart-mobility.mp4',
            title: 'SMART MOBILITY',
            description:
                'Connected smart vehicles/drones are entering the market and offer companies the chance to deliver goods further and in more efficient ways. Tracking of fleets and goods is not possible outside cities where no cellular coverage is available. OQ offers an end-to-end satellite 5G integrated solution that allows you to monitor your assets and fleet in real time, anywhere they may go. We can also support bi-directional communication to machines such as banking ATMs in poor connectivity areas. We provide a dual satellite-terrestrial solution that can switch automatically between our and partner networks.'
        }
    },
    {
        id: 5,
        imgSrc: require('../_assets/business/5.webp'),
        title: 'AGRICULTURE & HERD MANAGEMENT',
        subTitle: 'Connectivity for the smart agritech and livestock monitoring',
        modalData: {
            mediaPath: '/videos/smart-farm.mp4',
            title: 'SMART FARM',
            description:
                'Farms suffer globally from a lack of cellular connectivity. IoT-based smart farming involves monitoring the crop field with the help of sensors (light, humidity, temperature, soil moisture). These applications require permanent and reliable telecommunication coverage - Our global solution can achieve this purpose easily by integrating our module into your smart farming devices which gives you access to our data platform for a very low cost and within record time.'
        }
    },
    {
        id: 6,
        imgSrc: require('../_assets/business/6.webp'),
        title: 'SECURITY',
        subTitle: 'Connectivity for safety, asset protection,  and law enforcement',
        modalData: {
            mediaPath: '/videos/smart-mobility.mp4',
            title: 'SMS over Satellite 5G NR',
            description:
                'Connected smart vehicles/drones are entering the market and offer companies the chance to deliver goods further and in more efficient ways. Tracking of fleets and goods is not possible outside cities where no cellular coverage is available. OQ offers an end-to-end satellite 5G integrated solution that allows you to monitor your assets and fleet in real time, anywhere they may go. We can also support bi-directional communication to machines such as banking ATMs in poor connectivity areas. We provide a dual satellite-terrestrial solution that can switch automatically between our and partner networks.'
        }
    }
]

export const slides = [
    {
        id: 1,
        title: 'OQ ONE',
        paragraphs: [
            'OQ ONE is a flexible, rugged, and programmable IoT terminal offering pre-paid data packages, This terminal is specifically designed for remote monitoring and controlling of both fixed and mobile assets across various industries such as transportation, oil and gas, utilities, maritime, agriculture, and more.'
        ],
        imgSrc: require('../_assets/innovation/slide-1.webp'),
        buttonText: 'ORDER NOW A DEMO KIT'
    },
    {
        id: 2,
        title: 'OQ TrackME',
        paragraphs: [
            'OQ TrackME is a compact personal and commercial GPS/GNSS tracker with cellular and satellite 5G IoT connectivity offering pre-paid data packages and equipped with long life battery. This makes it an ideal companion for hikers, climbers, mountaineers and seafarers. Panic button also included.'
        ],
        imgSrc: require('../_assets/innovation/slide-2.webp'),
        buttonText: 'ORDER NOW'
    },
    {
        id: 3,
        title: 'Multimode LTE-M / NB-IoT / Satellite / GNSS SoC',
        paragraphs: [
            'Designed for applications requiring continuous network connectivity, the module leverages the new 3GPP Release 17 features to ensure seamless coverage across the globe. On top of the satellite connectivity, the module supports terrestrial LTE Cat Ml and LTE Cat NB2 optimized for IoT applications.'
        ],
        imgSrc: require('../_assets/innovation/slide-3.webp'),
        buttonText: 'ORDER NOW'
    }
]
