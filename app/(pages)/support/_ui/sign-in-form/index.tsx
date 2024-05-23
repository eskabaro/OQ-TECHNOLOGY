'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

import { Container } from '@/app/(app)/_components/container'
import { Text } from '@/app/_shared/ui/typography/text'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'

import styles from './SignInForm.module.scss'

interface IFormInput {
    email: string
    password: string
}

export const SignInForm: FC = () => {
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
            <div className={styles['form-box']}>
                <Text className={styles['form-box_heading']} as='h1'>
                    CLIENT SIGN IN
                </Text>
                <form className={styles['form-box_form']} onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('email', { required: true })} variant='first' placeholder='Email' type='email' error={!!errors.email} />
                    <Input
                        {...register('password', { required: true })}
                        variant='first'
                        placeholder='Password'
                        type='password'
                        error={!!errors.password}
                    />
                    <Button className={styles.btn} variant='short'>
                        <div className={styles['btn-circle']} />
                        <Text as='span'>LOG IN</Text>
                    </Button>
                </form>

                <div className={styles['form-box_helpers']}>
                    <Link href={''}>Forgot Password?</Link>
                    <Text as='span'>
                        Don’t have OQ Products yet? <br /> <Link href={''}>Order Here</Link>
                    </Text>
                    <Text as='span'>
                        Have OQ Products but no Account? <br /> <Link href={''}>Activate Here</Link>
                    </Text>
                </div>
            </div>
        </Container>
    )
}
