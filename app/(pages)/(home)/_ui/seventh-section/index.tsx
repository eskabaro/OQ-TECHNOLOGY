'use client'

import { FC } from 'react'
import { Container } from '@/app/(app)/_components/container'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'
import styles from './SeventhSection.module.scss'
import { Text } from '@/app/_shared/ui/typography/text'

interface IFormInput {
    firstName: string
    lastName: string
    company: string
    country: string
    email: string
    message: string
}

export const SeventhSection: FC = () => {
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
        <Container as='section'>
            <div className={styles['form-box']}>
                <Text as='h1'>Do You Have Any Idea Or Remaining Question ?</Text>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles['form_inputs-box']}>
                        <Input {...register('firstName', { required: true })} type='text' error={!!errors.firstName} variant='first' placeholder='First name *' />
                        <Input {...register('lastName', { required: true })} type='text' error={!!errors.lastName} variant='first' placeholder='Last name *' />
                        <Input {...register('company', { required: true })} type='text' error={!!errors.company} variant='first' placeholder='Company *' />
                        <Input {...register('country', {})} type='text' error={!!errors.country} variant='first' placeholder='Country' />
                        <Input {...register('email', { required: true })} type='email' error={!!errors.email} variant='first' placeholder='Email *' />
                        <Input {...register('message', { required: true })} type='text' error={!!errors.message} variant='first' placeholder='Message *' />
                    </div>
                    <div className={styles['form_btn-box']}>
                        <Button variant='long'>
                            <div className={styles['btn-circle']} />
                            <span className={styles['btn-text']}>SEND</span>
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    )
}
