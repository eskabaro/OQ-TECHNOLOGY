export interface IPlan {
    id: number
    title: string
    price: string
    services: string[]
}

export const plans: IPlan[] = [
    {
        id: 1,
        title: 'Premium',
        price: '9',
        services: ['Arcu mollis sagittis facilisi', 'Bibendum hendrerit', 'Semper vitae ullamcorper dui', 'Elit libero pharetra nisi amet.', 'Eget aliquam ut vestibulum', 'Nullam arcu ultrices odio nisi', 'Libero arcu sit massa tristique']
    },
    {
        id: 2,
        title: 'Premium',
        price: '9',
        services: ['Arcu mollis sagittis facilisi', 'Bibendum hendrerit', 'Semper vitae ullamcorper dui', 'Elit libero pharetra nisi amet.', 'Eget aliquam ut vestibulum', 'Nullam arcu ultrices odio nisi', 'Libero arcu sit massa tristique']
    },
    {
        id: 3,
        title: 'Premium',
        price: '9',
        services: ['Arcu mollis sagittis facilisi', 'Bibendum hendrerit', 'Semper vitae ullamcorper dui', 'Elit libero pharetra nisi amet.', 'Eget aliquam ut vestibulum', 'Nullam arcu ultrices odio nisi', 'Libero arcu sit massa tristique']
    },
    {
        id: 4,
        title: 'Premium',
        price: '9',
        services: ['Arcu mollis sagittis facilisi', 'Bibendum hendrerit', 'Semper vitae ullamcorper dui', 'Elit libero pharetra nisi amet.', 'Eget aliquam ut vestibulum', 'Nullam arcu ultrices odio nisi', 'Libero arcu sit massa tristique']
    }
]
