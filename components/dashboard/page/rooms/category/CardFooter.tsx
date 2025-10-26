import { Locale } from '@/i18n-config'
import { HiddenInput } from '@/components/features/Form'
import { IconDeviceFloppy } from '@/components/icons'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { createCategory } from '@/utils/actions'
import { Submit } from '@/components/features'

export function CardFooter({ lang }: { lang: Locale }) {
  return (
    <form className='flex flex-col gap-4 mt-8 carved'>
      <FieldGroup className='flex-row gap-2'>
        <Field>
          <FieldLabel htmlFor='category_name'>Enter Category Name</FieldLabel>
          <Input
            required
            placeholder='Name'
            className='peer w-full'
            type='text'
            id='category_name'
            name='category_name'
          />
          <HiddenInput name='lang' defaultValue={lang} />
        </Field>
        <Field>
          <FieldLabel htmlFor='max_guest'>Max Guest</FieldLabel>
          <Input
            required
            min={1}
            placeholder='0'
            className='peer w-full'
            type='number'
            id='max_guest'
            name='max_guest'
          />
        </Field>
      </FieldGroup>
      <Submit
        formAction={createCategory}
        Icon={IconDeviceFloppy}
        label='Save'
        variant='primary'
        type='submit'
        size='block'
      />
    </form>
  )
}
