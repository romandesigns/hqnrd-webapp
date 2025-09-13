import Image from 'next/image'
import ConvexTasks from './ConvexTasks'
import { Suspense } from 'react'
import { Brand, Card } from '@/components/features'
import { i18n, Locale } from '@/i18n-config'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react'
import { IconCheckupList, IconUser, IconChevronDown } from '@tabler/icons-react'

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Basic',
      href: '/docs/primitives/alert-dialog',
      description: 'Ideal for 1 or 2 people',
    },
    {
      title: 'Double Room',
      href: '/docs/primitives/hover-card',
      description: 'For sighted users to preview content a link.',
    },
    {
      title: 'Standard Room',
      href: '/docs/primitives/progress',
      description: 'Displays an indicator typically  a progress bar.',
    },
    {
      title: 'Ejecutive Suite',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Apartment',
      href: '/docs/primitives/tabs',
      description: 'A set of layered sections of are displayed one at a time.',
    },
    {
      title: 'Double Beds',
      href: '/docs/primitives/tooltip',
      description: 'A popup that displays focus or the mouse hovers over it.',
    },
  ]

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <h2 className='uppercase font-black'>Playground</h2>
      <nav className='w-full flex items-center justify-between max-width'>
        <Brand lang={lang} />
        <ul className='flex items-center gap-6 text-sm'>
          <li>Inicio</li>
          <li>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='link' className='p-0'>
                  Habitaciones
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-80 p-0' align='center'>
                pop
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <Button
              size={'icon'}
              variant={'outline'}
              className='relative text-md'
            >
              <Badge asChild className='absolute -top-2 -right-3'>
                <Link href='/'>0</Link>
              </Badge>
              <IconCheckupList />
            </Button>
          </li>
          <li>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={'outline'} className='text-md px-1'>
                  <p className='bg-primary p-1 ml-0.5 rounded-sm text-background'>
                    <IconUser />
                  </p>
                  <span className='px-2 flex items-center gap-2'>
                    Visitante
                    <span>
                      <IconChevronDown />
                    </span>
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-52 p-1' align='center'>
                <ul>
                  <li>Iniciar Sesion</li>
                  <li>Crear Cuenta</li>
                </ul>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </nav>
    </div>
  )
}
