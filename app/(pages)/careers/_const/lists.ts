export const featureCards = [
    {
        title: 'FEATURES',
        paragraphs: [
            '• Tech company',
            '• Startup feeling',
            '• Open communication',
            '• Working on actual engineering work',
            '• Be a key member of the organization in no time',
            '• Real growth opportunities'
        ],
        imageSrc: require('../_assets/features-1.png')
    },
    {
        title: 'COMFORT',
        paragraphs: [
            "• Based in Leudelange, at 15 min from LUX citycenter and at 5min from Cloche d'Or shopping center",
            '• Open office',
            '• International working environment',
            '• Home working possible'
        ],
        imageSrc: require('../_assets/features-2.png')
    }
]

export interface IMetricItem {
    value: string
    label: string
}

export const metricItems: IMetricItem[] = [
    {
        value: '+42%',
        label: 'turnover over 3 year, creating 16 new jobs'
    },
    {
        value: '35%',
        label: 'of staff have 10y+ exp, 38% 5y+ and 27% are juniors'
    },
    {
        value: '78.5%',
        label: 'employee Net Promoter Score'
    }
]

interface IStep {
    title: string
    description: string
    imageSrc: string
}

export const steps: IStep[] = [
    {
        title: 'Click on your favorite job offer',
        description: "If you're interested in more than 1 job, please apply to each separately.",
        imageSrc: require('../_assets/steps/step-1.png')
    },
    {
        title: 'Upfront questionnaire',
        description: "You'll be invited to answer a few questions, helping us to know you better. Please keep in mind that each job offer is specifying the work location. Full remote applicants will not be considered at this point of time.",
        imageSrc: require('../_assets/steps/step-2.png')
    },
    {
        title: 'Submit your CV and supporting documents',
        description: "OQ will value your studies and work experiences. Be specific and do not oversell!",
        imageSrc: require('../_assets/steps/step-3.png')
    },
    {
        title: 'OQ will process your application within 2 months',
        description: '',
        imageSrc: require('../_assets/steps/step-4.png')
    },
    {
        title: 'If selected, ...',
        description: "you'll be called by our HR officers. An email summarizing discussed information and defining a Teams meeting with our COO will be sent the same day.",
        imageSrc: require('../_assets/steps/step-5.png')
    },
    {
        title: 'Face-to-face interview',
        description: '',
        imageSrc: require('../_assets/steps/step-6.png')
    }
]
