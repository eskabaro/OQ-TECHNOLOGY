import Image from 'next/image';

import { Article } from '@/app/_shared/ui/typography/article';
import { SubTitle } from '@/app/_shared/ui/sub-title';
import { Container } from '@/app/(app)/_components/container';
import { StatsMarker } from './_ui/stats-marker';
import { FeatureCard } from './_ui/feature-card';
import { Stepper } from './_ui/stepper';

import styles from './ThirdSection.module.scss';

export const ThirdSection = () => {
  return (
    <Container className={styles.wrapper} as='section'>
      <SubTitle upTitle='' title='LOREM IPSUM' />
      <div className={styles.content}>
        <div className={styles.content__left}>
          <Article
            titleIcon='star'
            title='Lorem ipsum dolor sit'
            paragraphs={[
              'Lorem ipsum dolor sit amet consectetur. Eu malesuada dignissim pulvinar dolor. At turpis nisl dolor pellentesque quis egestas tempor congue sed. Velit neque odio nulla ornare. Eu purus ornare lorem justo et velit ullamcorper. Imperdiet id amet mauris purus sed massa interdum posuere. Facilisis cras pellentesque blandit fringilla. Quam tellus ornare a vulputate.',
              'Lorem ipsum dolor sit amet consectetur. Nec tincidunt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et iaculis nunc mi varius etiam. Feugiat purus cursus non nunc id vitae senectus. Tempus ullamcorper egestas tincidunt egestas facilisi platea. Nullam augue quis morbi risus at et habitant pretium. At imperdiet sodales nibh venenatis enim eu accumsan ornare. Interdum vivamus vel dictumst nibh sed tempus in. Netus egestas elit accumsan auctor dui dictum.'
            ]}
          />
          <hr />
          <div className={styles.stats_container}>
            <StatsMarker value='16+' label='Years experience...' />
            <StatsMarker value='5k+' label='Happy Customers...' />
          </div>
        </div>

        <div className={styles.content__right}>
          <Image src={require('../../_assets/image-1.webp')} alt='' />
          <Image src={require('../../_assets/image-2.webp')} alt='' />
          <Image src={require('../../_assets/image-3.webp')} alt='' />
          <Image src={require('../../_assets/image-4.webp')} alt='' />
        </div>
      </div>
      <div className={styles.features_container}>
        <FeatureCard imageSrc={require('../../_assets/features-1.png')} title='FEATURES' description='Lorem ipsum dolor sit amet consectetur. Nec tinci d u nt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et i varius etiam. ' />
        <FeatureCard imageSrc={require('../../_assets/features-2.png')} title='COMFORT' description='Lorem ipsum dolor sit amet consectetur. Nec tinci d u nt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et i varius etiam. ' />
        <FeatureCard imageSrc={require('../../_assets/features-3.png')} title="COMBINATION" description="Lorem ipsum dolor sit amet consectetur. Nec tinci d u nt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et i varius etiam. " />
      </div>
      <Stepper />
    </Container>
  )
}
