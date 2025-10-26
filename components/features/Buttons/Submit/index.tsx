'use server'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'

export async function Submit({
  className,
  Icon,
  label,
  variant,
  type,
  size,
  operation,
  formAction,
}: {
  className?: string
  Icon?: React.ComponentType
  label?: string
  variant: 'primary' | 'secondary' | 'link'
  type: 'button' | 'submit' | 'reset'
  size?: 'icon' | 'block' | 'default'
  operation?: 'write' | 'delete' | 'update'
  formAction?: (formData: FormData) => Promise<void>
}) {
  return (
    <Button
      formAction={formAction}
      type={type}
      size={size}
      variant={variant}
      className={clsx('', className)}
    >
      {Icon && <Icon />}
      {label && <span>{label}</span>}
    </Button>
  )
}
