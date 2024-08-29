export interface IPlan {
    id: number
    title: string
    options: IOption[]
}

interface IOption {
    label: string
    value: string
}

export const plans: IPlan[] = [
    {
        id: 1,
        title: 'Standart tracking use cases',
        options: [
            {
                label: 'Airtime for tracking 1 to 4 connections / day',
                value: '$10.00'
            },
            {
                label: 'Airtime for tracking 5 to 12 connections / day',
                value: '$23.00'
            },
            {
                label: 'Airtime for tracking 12 to 24 connections / day',
                value: '$50.00'
            },
            {
                label: 'Airtime for tracking Unlimited (each 5 min)',
                value: '$95.00'
            }
        ]
    },
    {
        id: 2,
        title: 'Cattle tracking use case',
        options: [
            {
                label: 'Airtime for tracking 1 connection / day',
                value: '$0.5'
            },
            {
                label: 'Airtime for tracking 2 connections / day',
                value: '$1.5'
            },
            {
                label: 'Airtime for tracking 4 connections / day',
                value: '$3.5'
            },
            {
                label: 'Airtime for tracking 8 connections / day',
                value: '$6.00'
            },
            {
                label: 'Airtime for tracking 12 connections / day',
                value: '$10.00'
            },
            {
                label: 'Airtime for tracking Hourly connections',
                value: '$20.00'
            },
            {
                label: 'Airtime for tracking Unlimited (each 5 min)',
                value: '$99.00'
            }
        ]
    }
]
