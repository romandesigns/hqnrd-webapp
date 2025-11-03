import clsx from 'clsx'

export function MainArticle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <article className={clsx('p-2', className)}>{children}</article>
}
