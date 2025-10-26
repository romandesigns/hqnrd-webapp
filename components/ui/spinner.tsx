import { cn } from '@/lib/utils'
import { IconLoader } from '../icons'
import { Icon } from '@tabler/icons-react'

function Spinner({ className, ...props }: React.ComponentProps<Icon>) {
  return (
    <IconLoader
      role='status'
      aria-label='Loading'
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
