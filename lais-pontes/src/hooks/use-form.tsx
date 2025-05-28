'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import {
  DefaultValues,
  FieldValues,
  SubmitErrorHandler,
  useForm as useHookForm,
} from 'react-hook-form'
import { ZodType } from 'zod'

interface UseFormProps<T extends FieldValues> {
  schema: ZodType<T>
  defaultValues?: DefaultValues<T>
  mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'
  reValidateMode?: 'onBlur' | 'onChange' | 'onSubmit'
}

export function useForm<T extends FieldValues>({
  schema,
  defaultValues,
  mode = 'onChange',
  reValidateMode = 'onChange',
}: UseFormProps<T>) {
  const {
    register,
    setValue,
    watch,
    setError,
    clearErrors,
    handleSubmit,
    control,
    formState,
    getFieldState,
    trigger,
    getValues,
    resetField,
    setFocus,
    reset,
  } = useHookForm<T>({
    mode,
    criteriaMode: 'all',
    reValidateMode,
    resolver: zodResolver(schema),
    defaultValues,
  })

  const handleErrors: SubmitErrorHandler<T> = (errors) => {
    const messagesArray = Object.values(errors)
    messagesArray.forEach((error) => error?.message)
  }

  useEffect(() => {
    handleErrors(formState.errors)
  }, [formState.errors])

  return {
    control,
    setValue,
    register,
    handleSubmit,
    formState,
    watch,
    setError,
    clearErrors,
    getFieldState,
    getValues,
    trigger,
    resetField,
    setFocus,
    reset,
  }
}
