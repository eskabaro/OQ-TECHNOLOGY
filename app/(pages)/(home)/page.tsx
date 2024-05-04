import { Preview } from './_ui/preview'
import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import { ThirdSection } from './_ui/third-section'
import { FourthSection } from './_ui/fourth-section'
import { FifthSection } from './_ui/fifth-section'
import { SixthSection } from './_ui/sixth-section'
import { SeventhSection } from './_ui/seventh-section'

import styles from './_styles/Home.module.scss'

const components = {
    Preview,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    SixthSection,
    SeventhSection
}

export default function HomePage() {
    return (
        <div className={styles.wrapper}>
            {Object.values(components).map((Component) => (
                <Component key={Component.name} />
            ))}
        </div>
    )
}
