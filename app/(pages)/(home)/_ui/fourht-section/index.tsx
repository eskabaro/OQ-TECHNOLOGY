'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Container } from '@/app/(app)/_components/container'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'

import styles from './FourthSection.module.scss'

interface IFormInput {
    email: string
}

export const FourthSection: FC = () => {
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
            <div className={styles.wrapper_bg}>
                <div className={styles.heading}>
                    <h2 className={styles.title}>30 DAY TRIAL</h2>
                    <p className={styles.text}>TRY OQ SERVICE FOR 30 DAYS AND IF NOT SATISFIED, GET A FULL REFUND.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Input {...register('email', { required: true })} error={!!errors.email} variant='first' placeholder='Email' type='email' />
                    <Button variant='short'>ORDER NOW</Button>
                </form>
            </div>
        </Container>
    )
}
