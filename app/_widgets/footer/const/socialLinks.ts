import { IconsType } from '@/app/_shared/const/icons'

interface ISocialLink {
    name: IconsType
    link: string
}

export const socialLinks: ISocialLink[] = [
    {
        name: 'youtube',
        link: 'https://www.youtube.com/channel/UCcl37bKctygpmYUS3aoRFTQ'
    },
    {
        name: 'twitter',
        link: 'https://x.com/oqtec'
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/oqtec'
    }
]
