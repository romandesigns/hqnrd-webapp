import type { Locale } from '@/i18n-config'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { IconDeviceFloppy } from '@/components/icons'
import { DrawerMenu } from '@/components/layout/sections/Navigation/components/Drawer'
import Link from 'next/link'
import { Card } from '@/components/features'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'

const Header = () => (
  <div className='px-1 text-xs mb-2 text-muted-foreground flex items-center gap-2'>
    <span className='font-bold text-primary'>4</span>
    <span>Categorias</span>
  </div>
)

const Footer = () => (
  <form className='flex flex-col gap-4 mt-8 bg-background/50 p-4 rounded-md inset-shadow-sm inset-shadow-background border-b'>
    <FieldGroup className='flex-row gap-2'>
      <Field>
        <FieldLabel htmlFor='categoria_name'>Enter Category Name</FieldLabel>
        <Input
          placeholder='Name'
          className='w-full'
          type='text'
          id='categoria_name'
        />
      </Field>
      <Field>
        <FieldLabel htmlFor='max_guess'>Max Guest</FieldLabel>
        <Input
          placeholder='0'
          className='w-full'
          type='number'
          id='max_guess'
        />
      </Field>
    </FieldGroup>
    <div className='flex items-center justify-end'>
      <Button size={'block'} variant='primary' type='submit'>
        <IconDeviceFloppy />
        <p>Save</p>
      </Button>
    </div>
  </form>
)

export function Category({ lang }: { lang: Locale }) {
  return (
    <>
      <nav className='flex items-center p-2'>
        <SidebarTrigger />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-4'
        />
        <Breadcrumb className='mr-auto'>
          <BreadcrumbList>
            <BreadcrumbItem className='hidden md:block'>
              <Link
                href={`/${lang}/dashboard/habitactiones`}
                className='text-xs'
              >
                Habitaciones
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='hidden md:block' />
            <BreadcrumbItem className='text-xs'>
              <BreadcrumbPage>Categorias</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='block md:hidden'>
          <DrawerMenu lang={lang} className='ml-auto' />
        </div>
      </nav>
      <section className='p-2 flex-1 flex items-center justify-center'>
        <Card
          Header={<Header />}
          Footer={<Footer />}
          className='max-w-xl p-4'
          aroundPadding
          headerClassName='px-0 pb-0'
          footerClassName='space-y-4 mt-4'
        >
          <ul className='flex flex-col gap-4'>
            <li className='flex items-center justify-between'>
              <p className='font-bold'>Basica</p>
              <div className='text-xs flex items-center gap-4'>
                <p className='text-(--brand-warning)'>Edit</p>
                <p className='text-(--brand-danger)'>Delete</p>
              </div>
            </li>
            <li className='flex items-center justify-between'>
              <p className='font-bold'>Doble Cama</p>
              <div className='text-xs flex items-center gap-4'>
                <p className='text-(--brand-warning)'>Edit</p>
                <p className='text-(--brand-danger)'>Delete</p>
              </div>
            </li>
          </ul>
        </Card>
      </section>
    </>
  )
}
