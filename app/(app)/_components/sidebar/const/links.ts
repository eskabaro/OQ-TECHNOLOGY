export interface ILink {
    id: number
    title: string
    href?: string
    childrens: ILink[]
}

export const links: ILink[] = [
    {
        id: 1,
        title: 'enterprise',
        href: '/',
        childrens: []
    },
    {
        id: 2,
        title: 'roam',
        href: 'roam',
        childrens: []
    },
    {
        id: 3,
        title: 'personal',
        href: 'personal',
        childrens: []
    },
    {
        id: 4,
        title: 'careers',
        href: 'careers',
        childrens: [],
    },
    {
        id: 5,
        title: 'technology',
        href: 'technology',
        childrens: []
    },
    {
        id: 6,
        title: 'service plans',
        href: 'service-plans',
        childrens: []
    },
    {
        id: 7,
        title: 'availability map',
        href: 'availability-map',
        childrens: []
    },
    {
        id: 8,
        title: 'satellite map',
        href: 'satellite-map',
        childrens: []
    },
    {
        id: 9,
        title: 'price comparison',
        href: 'price-comparison',
        childrens: []
    },
    {
        id: 10,
        title: 'investors',
        href: 'investors',
        childrens: []
    },
    {
        id: 11,
        title: 'support',
        href: 'support',
        childrens: []
    },
    {
        id: 12,
        title: 'about us',
        href: 'about-us',
        childrens: []
    },
    {
        id: 13,
        title: 'news and media',
        href: '',
        childrens: [
            {
                id: 1,
                title: 'news',
                href: 'news',
                childrens: []
            },
            {
                id: 2,
                title: 'media',
                href: 'in-the-media',
                childrens: []
            }
        ]
    },
    {
        id: 14,
        title: 'contact us',
        href: 'contact-us',
        childrens: []
    }
]
