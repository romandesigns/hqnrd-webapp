import clsx from 'clsx'

export function MainSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={clsx('p-2 w-full flex flex-col', className)}>
      {children}
    </section>
  )
}
