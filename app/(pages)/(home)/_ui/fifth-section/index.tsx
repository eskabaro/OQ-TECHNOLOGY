'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'

import styles from './FifthSection.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
    email: string
}

export const FifthSection: FC = () => {
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
        <Container as='section' className={styles.wrapper}>
            <Title isObserver size='XXL' className={styles.wrapper_heading} title='30 DAY TRIAL' text='TRY OQ SERVICE FOR 30 DAYS AND IF NOT SATISFIED, GET A FULL REFUND.' />

            <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper_form}>
                <Input {...register('email', { required: true })} error={!!errors.email} variant='first' placeholder='Email' type='email' />
                <Button variant='short'>ORDER NOW</Button>
            </form>
        </Container>
    )
}
