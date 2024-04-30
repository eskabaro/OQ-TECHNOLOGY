export interface ILink {
    id: number
    title: string
    href?: string
    childrens: ILink[]
}

export const links: ILink[] = [
    {
        id: 1,
        title: 'technology',
        href: 'technology',
        childrens: []
    },
    {
        id: 2,
        title: 'service plans',
        href: 'service-plans',
        childrens: []
    },
    {
        id: 3,
        title: 'satellite map',
        href: 'satellite-map',
        childrens: []
    },
    {
        id: 4,
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
        id: 5,
        title: 'contact us',
        href: 'contact-us',
        childrens: []
    }
]
