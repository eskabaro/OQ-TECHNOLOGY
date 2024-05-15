export interface IPlan {
    id: number
    title: string
    description: string
    price: string
    services: string[]
}

export const plans: IPlan[] = [
    {
        id: 1,
        title: 'Lite',
        description: 'Suitable for fixed low data occasional messaging or alerts',
        price: '9',
        services: [
            '20 KB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Further discounted tiers when combined with OQ HW and IoT Platform access'
        ]
    },
    {
        id: 2,
        title: 'Pro',
        description: 'Suitable for daily monitoring and commanding IoT applications such as in agriculture and environmental monitoring',
        price: '9',
        services: [
            '100 KB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Further discounted tiers when combined with OQ HW and IoT Platform access'
        ]
    },
    {
        id: 3,
        title: 'Premium',
        description: 'Suitable for tracking and mobile IoT applications such as in logistics and maritime',
        price: '9',
        services: [
            '500 KB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Further discounted tiers when combined with OQ HW and IoT Platform access'
        ]
    },
    {
        id: 4,
        title: 'Enterprise',
        description: 'Suitable for predictive maintenance and hourly reporting and metering',
        price: '9',
        services: [
            '1 MB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Further discounted tiers when combined with OQ HW and IoT Platform access'
        ]
    }
]
