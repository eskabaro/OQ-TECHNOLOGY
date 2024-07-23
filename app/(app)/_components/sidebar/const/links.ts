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
        title: 'technology',
        href: 'technology',
        childrens: []
    },
    {
        id: 5,
        title: 'service plans',
        href: 'service-plans',
        childrens: []
    },
    {
        id: 6,
        title: 'availability map',
        href: 'availability-map',
        childrens: []
    },
    {
        id: 7,
        title: 'satellite map',
        href: 'satellite-map',
        childrens: []
    },
    {
        id: 8,
        title: 'price comparison',
        href: 'price-comparison',
        childrens: []
    },
    {
        id: 9,
        title: 'investors',
        href: 'investors',
        childrens: []
    },
    {
        id: 10,
        title: 'support',
        href: 'support',
        childrens: []
    },
    {
        id: 11,
        title: 'about us',
        href: 'about-us',
        childrens: []
    },
    {
        id: 12,
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
        id: 13,
        title: 'contact us',
        href: 'contact-us',
        childrens: []
    }
]
