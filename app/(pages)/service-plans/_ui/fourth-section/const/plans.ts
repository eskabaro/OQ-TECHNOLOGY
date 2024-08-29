import { IPlan } from "../../second-section/const/plans";

export const plans: IPlan[] = [
    {
        id: 1,
        title: 'MONTHLY BASIC',
        price: '0.99',
        period: 'mo',
        services: [
            'No. of Users: 1 User',
            'Track History: 1 Year',
            'No. of Assets: Unlimited',
            'Shared Views: Unlimited',
            'Reports: Yes',
            'Data Export: Yes',
            'User Management: Yes',
            'Custom Attributes: No',
            'Alerts: No',
            'Advanced Map Layers: No',
            'Email & SMS Alert: No',
            'Geofencing: No',
            'Scheduled Reports: No',
            'Scheduled Commands: No'
        ]
    },
    {
        id: 2,
        title: 'MONTHLY PREMIUM',
        price: '9.99',
        period: 'mo',
        services: [
            'No. of Users: Unlimited',
            'Track History: 3 Years',
            'No. of Assets: Unlimited',
            'Shared Views: Unlimited',
            'Reports: Yes',
            'Data Export: Yes',
            'User Management: Yes',
            'Custom Attributes: Yes',
            'Alerts: Yes',
            'Advanced Map Layers: Yes',
            'Email & SMS Alert: Yes',
            'Geofencing: Yes',
            'Scheduled Reports: Yes',
            'Scheduled Commands: Yes'
        ]
    },
    {
        id: 3,
        title: 'ANNUAL BASIC',
        price: '2.99',
        period: 'yr',
        services: [
            'No. of Users: 1 User',
            'Track History: 1 Year',
            'No. of Assets: Unlimited',
            'Shared Views: Unlimited',
            'Reports: Yes',
            'Data Export: Yes',
            'User Management: Yes',
            'Custom Attributes: No',
            'Alerts: No',
            'Advanced Map Layers: No',
            'Email & SMS Alert: No',
            'Geofencing: No',
            'Scheduled Reports: No',
            'Scheduled Commands: No'
        ]
    },
    {
        id: 4,
        title: 'ANNUAL PREMIUM',
        price: '29.99',
        period: 'yr',
        services: [
            'No. of Users: Unlimited',
            'Track History: 3 Years',
            'No. of Assets: Unlimited',
            'Shared Views: Unlimited',
            'Reports: Yes',
            'Data Export: Yes',
            'User Management: Yes',
            'Custom Attributes: Yes',
            'Alerts: Yes',
            'Advanced Map Layers: Yes',
            'Email & SMS Alert: Yes',
            'Geofencing: Yes',
            'Scheduled Reports: Yes',
            'Scheduled Commands: Yes'
        ]
    }
]