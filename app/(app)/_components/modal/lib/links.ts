export interface ILink {
    id: number
    title: string
    href?: string
    childrens: ILink[]
}

export const links: ILink[] = [
    {
        id: 1,
        title: 'Technology',
        href: 'technology',
        childrens: []
    },
    {
        id: 2,
        title: 'Service Plans',
        href: 'service-plans',
        childrens: []
    },
    {
        id: 3,
        title: 'News and Media',
        href: '',
        childrens: [
            {
                id: 1,
                title: 'News',
                href: 'news',
                childrens: []
            },
            {
                id: 2,
                title: 'media',
                href: '',
                childrens: []
            }
        ]
    },
    {
        id: 4,
        title: 'Contact Us',
        href: 'contact-us',
        childrens: []
    }
]
