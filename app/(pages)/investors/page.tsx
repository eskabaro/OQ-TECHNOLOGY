import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import { ThirdSection } from './_ui/third-section'
import { FifthSection } from './_ui/fifth-section'
import { SixthSection } from './_ui/sixth-section'
import { SeventhSection } from './_ui/seventh-section'
import { EightSection } from './_ui/eight-section'

import styles from './_styles/Investors.module.scss'

const components = {
    FirstSection,
    SecondSection,
    ThirdSection,
    FifthSection,
    SixthSection,
    SeventhSection,
    EightSection,
}

export default function InvestorsPage() {
    return (
        <div className={styles.wrapper}>
            {Object.values(components).map((Component) => (
                <Component key={Component.name} />
            ))}
        </div>
    )
}
