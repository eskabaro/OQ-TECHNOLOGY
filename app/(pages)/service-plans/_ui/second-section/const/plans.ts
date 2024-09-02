export interface IPlan {
    id: number
    title: string
    description?: string
    price: string
    period: 'mo' | 'yr'
    services: string[]
}

export const plans: IPlan[] = [
    {
        id: 1,
        title: 'Lite',
        description: 'Suitable for fixed low data occasional messaging or alerts',
        price: '5.00',
        period: 'mo',
        services: [
            '20 KB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Airtime prices are tiers-based, and can be combined with Products and NMS Insight purchases'
        ]
    },
    {
        id: 2,
        title: 'Pro',
        description: 'Suitable for daily monitoring and commanding IoT applications such as in agriculture and environmental monitoring',
        price: '15.00',
        period: 'mo',
        services: [
            '100 KB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Airtime prices are tiers-based, and can be combined with Products and NMS Insight purchases'
        ]
    },
    {
        id: 3,
        title: 'Premium',
        description: 'Suitable for tracking and mobile IoT applications such as in logistics and maritime',
        price: '89.00',
        period: 'mo',
        services: [
            '500 KB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Airtime prices are tiers-based, and can be combined with Products and NMS Insight purchases'
        ]
    },
    {
        id: 4,
        title: 'Enterprise',
        description: 'Suitable for predictive maintenance and hourly reporting and metering',
        price: '129.00',
        period: 'mo',
        services: [
            '1 MB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Airtime prices are tiers-based, and can be combined with Products and NMS Insight purchases'
        ]
    },
    {
        id: 5,
        title: 'Unlimited',
        description: 'Suitable for predictive maintenance and hourly reporting and metering',
        price: '249.00',
        period: 'mo',
        services: [
            '1 MB/mo included',
            'No set up fee',
            'Flexible contract, no commitment needed',
            'Network availability fee',
            'Low latency',
            'No overage, switch to other plans',
            'Airtime prices are tiers-based, and can be combined with Products and NMS Insight purchases'
        ]
    }
]
