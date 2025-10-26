import type React from 'react'
import { cn } from '@/lib/utils'

const PADDING_RATIO = 1.5

interface CardProps {
  Header?: React.ReactNode
  children: React.ReactNode
  Footer?: React.ReactNode
  className?: string
  headerClassName?: string
  footerClassName?: string
  bodyClassName?: string
  horizontalPadding?: boolean
  aroundPadding?: boolean
  showElevatedSurface?: boolean
}

function isHeaderVisible(Header: React.ReactNode) {
  // Only filter out null, undefined, or false
  return Header !== null && Header !== undefined && Header !== false
}

export function Card({
  Header,
  children,
  Footer,
  className,
  headerClassName,
  footerClassName,
  bodyClassName,
  horizontalPadding = false,
  aroundPadding = false,
  showElevatedSurface = true,
}: CardProps) {
  return (
    <div
      className={cn(
        `bg-sidebar/80 dark:bg-popover p-0.5 rounded-lg overflow-hidden flex-1  ${horizontalPadding ? `px-${PADDING_RATIO}` : ''} ${aroundPadding ? `p-${PADDING_RATIO}` : ''}`,
        className,
      )}
    >
      {isHeaderVisible(Header) && (
        <header className={cn('p-2', headerClassName)}>{Header}</header>
      )}
      <article
        className={cn(
          `${showElevatedSurface ? 'elevated-surface' : ''}`,
          bodyClassName,
        )}
      >
        {children}
      </article>
      {Footer && (
        <footer
          className={cn('text-muted-foreground text-xs', footerClassName)}
        >
          {Footer}
        </footer>
      )}
    </div>
  )
}
