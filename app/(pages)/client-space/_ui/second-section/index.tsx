'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'

import { Container } from '@/app/(app)/_components/container'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'
import { hotlines } from '@/app/_shared/const/hotlines'
import { HotlineItem } from './_ui/hotline-item'
import { Button } from '@/app/_shared/ui/button'
import { Textarea } from '@/app/_shared/ui/textarea'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './SecondSection.module.scss'

type FileType = FileList | null

interface IFormInput {
    message: string
    file: FileType
}

export const SecondSection: FC = () => {
    const [files, setFiles] = useState<FileType>(null)

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IFormInput>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <Container className={styles.wrapper} as='section'>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='p'>TECHNOLOGY</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='h1'>SAT-CP</Text>
                </HeadingAnimate>
            </div>
            <div className={styles.content}>
                <div className={styles.content_list}>
                    <Text as='h2'>HOTLINE FOR CLIENTS</Text>
                    <ul>
                        {hotlines.map((e) => (
                            <HotlineItem key={e.id} {...e} />
                        ))}
                    </ul>
                </div>
                <div className={styles.content_form}>
                    <Text as='h2'>HAVE ANY QUESTION?</Text>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div
                            className={cn(styles['form_fields-box'], {
                                [styles.error]: !!errors.message
                            })}
                        >
                            <Textarea {...register('message', { required: true })} placeholder='Your message *' error={!!errors.message} />
                            <label htmlFor='input-file' className={styles['input-box']}>
                                {!files?.length && <Icon name='plus' />}
                                <Text as='span'>{files?.length ? 'REPALCE FILE' : 'DRAG OR UPLOAD FILE'}</Text>
                                <input
                                    {...register('file', {
                                        onChange: (e) => {
                                            setFiles(e.target.files)
                                        }
                                    })}
                                    id='input-file'
                                    type='file'
                                />
                            </label>
                        </div>
                        <Button className={styles['form_submit-btn']} type='submit' variant='long'>
                            <div className={styles['circle-btn']} />
                            <Text as='span'>SEND</Text>
                        </Button>
                    </form>
                </div>
            </div>
        </Container>
    )
}
