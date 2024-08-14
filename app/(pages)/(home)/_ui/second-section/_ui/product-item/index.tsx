import { FC } from 'react';
import Image from 'next/image';

import { Article } from '@/app/_shared/ui/typography/article';
import { Button } from '@/app/_shared/ui/button';
import { IProductItem } from '@/app/(pages)/(home)/_const/lists';
import styles from './ProductItem.module.scss';

interface IProductItemProps extends IProductItem {}

export const ProductItem: FC<IProductItemProps> = ({ id, title, paragraphs, imgSrc, buttonText, onClick }) => {
  return (
    <div key={id} className={styles.slide}>
      <div key={id} className={styles.article}>
        <Article titleTag='h2' title={title} paragraphs={paragraphs} />
        <div className={styles['article_btn-box']}>
          <Button variant='short' onClick={onClick}>{buttonText}</Button>
        </div>
      </div>

      <div className={styles['image-box']}>
        <Image src={imgSrc} height={666} width={773} priority alt='' />
      </div>
    </div>
  )
}