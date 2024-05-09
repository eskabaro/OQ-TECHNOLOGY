'use client'

import { FC, PropsWithChildren } from 'react'

import { cn } from '../../lib/classnames'
import { HeadingAnimate } from '../heading-animate'
import { Text } from '../typography/text'
import { ButtonGroup } from '../button-group'
import { Button } from '../button'
import { Icon } from '../icon'

import styles from './SubTitle.module.scss'

interface ISubTitleProps extends PropsWithChildren<unknown> {
    upTitle: string
    title: string
    isButtonGroup?: boolean
    isUnderline?: boolean
    auxiliaryBtn?: boolean
}

export const SubTitle: FC<ISubTitleProps> = ({ upTitle, title, isButtonGroup, isUnderline, auxiliaryBtn, children }) => {
    return (
        <div className={cn(styles['sub-title'], !!children && styles.PB, !isUnderline && styles.underline)}>
            <div className={styles['sub-title_typography']}>
                <Text as='span'>{upTitle}</Text>
                <HeadingAnimate>
                    <Text as='h1'>{title}</Text>
                </HeadingAnimate>
                {children && (
                    <HeadingAnimate duration={200}>
                        <Text as='p'>{children}</Text>
                    </HeadingAnimate>
                )}
            </div>
            {isButtonGroup && (
                <div className={styles['sub-title_btn-box']}>
                    <ButtonGroup size='XL'>
                        <button>
                            <Icon name='next' />
                        </button>
                        <button>
                            <Icon name='prev' />
                        </button>
                    </ButtonGroup>
                    {auxiliaryBtn && (
                        <Button variant='dark'>
                            <div>{'Check More ->'}</div>
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}
