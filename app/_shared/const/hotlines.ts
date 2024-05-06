export interface IHotlineItem {
    id: number
    country: string
    tel: string
    flagImg: string
}

export const hotlines: IHotlineItem[] = [
    {
        id: 1,
        country: 'Luxembourg',
        tel: '+352 20 60 28 68',
        flagImg: '/flags/luxembourg.svg'
    },
    {
        id: 2,
        country: 'Greece',
        tel: '+30 697 0050847',
        flagImg: '/flags/greece.svg'
    },
    {
        id: 3,
        country: 'Rwanda',
        tel: '+250 788 300 075',
        flagImg: '/flags/rwanda.svg'
    },
    {
        id: 4,
        country: 'UAE',
        tel: '+971 54 455 2064',
        flagImg: '/flags/uae.svg'
    },
    {
        id: 5,
        country: 'Saudi Arabia',
        tel: '+966 53 951 2262',
        flagImg: '/flags/saudi-arabia.svg'
    }
]
