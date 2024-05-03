export interface IListItem {
    id: number
    imgSrc: string
    title: string
    subTitile: string
}

export const servicesList: IListItem[] = [
    {
        id: 1,
        imgSrc: '/home/service-1.webp',
        title: 'STANDARD​',
        subTitile: 'Compatible with 3GPP standard Rel. 17 – No proprietary tech lock-up​'
    },
    {
        id: 2,
        imgSrc: '/home/service-2.webp',
        title: 'ANYWHERE​',
        subTitile: 'Connect almost any site on land or sea'
    },
    {
        id: 3,
        imgSrc: '/home/service-3.webp',
        title: 'RELIABLE',
        subTitile: 'High QoS and Security, ensure business continuity'
    }
]

export const businessList: IListItem[] = [
    {
        id: 1,
        imgSrc: '/home/business/1.webp',
        title: 'ENERGY & UTILITIES',
        subTitile: 'Ut ac nam potenti magna habitasse in vehicula. Ultricies imperdiet nisl morbi amet leo nisl netus sit. Scelerisque vitae id amet dignissim. Lectus amet.​'
    },
    {
        id: 2,
        imgSrc: '/home/business/2.webp',
        title: 'MARITIME​',
        subTitile: 'Mauris ullamcorper in massa tortor id tincidunt. Aliquet lacus tincidunt leo faucibus tortor varius nunc. Lectus arcu donec massa lectus ipsum nulla.'
    },
    {
        id: 3,
        imgSrc: '/home/business/3.webp',
        title: 'MINING​',
        subTitile: 'Tortor in cursus morbi luctus id ultrices. Urna vel eu varius habitant orci nisl enim vitae. Elit nulla maecenas magna sit vitae nec tincidunt ac.'
    },
    {
        id: 4,
        imgSrc: '/home/business/4.webp',
        title: 'LOGISTICS',
        subTitile: 'Tempus in adipiscing sem pharetra dictum sit posuere massa ut. Facilisi neque sed libero tristique cras condimentum. Aliquam a quis sed aliquam.'
    },
    {
        id: 5,
        imgSrc: '/home/business/5.webp',
        title: 'AGRICULTURE',
        subTitile: 'Lorem pulvinar at purus donec aliquam eget fermentum dictumst. A in ultrices gravida donec donec aliquet. Ipsum eu elementum risus viverra.'
    },
    {
        id: 6,
        imgSrc: '/home/business/6.webp',
        title: 'SECURITY',
        subTitile: 'Ut et sed quam in sagittis neque enim a. Nibh morbi lectus ut diam urna aliquam tempus pellentesque molestie. Ac vel eget mattis cursus consequat.'
    }
]
