import { Submit } from '@/components/features'
import { HiddenInput } from '@/components/features/Form'
import { IconDeviceFloppy } from '@/components/icons'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import type { Locale } from '@/i18n-config'
import { createCategory } from '@/utils/actions'

export function CardFooter({ lang }: { lang: Locale }) {
  return (
    <form className='flex flex-col gap-4 mt-8 carved'>
      <FieldGroup className='flex-row gap-2'>
        <Field>
          <FieldLabel htmlFor='categoryName'>Enter Category Name</FieldLabel>
          <Input
            required
            placeholder='Name'
            className='peer w-full'
            type='text'
            id='categoryName'
            name='categoryName'
          />
          <HiddenInput name='lang' defaultValue={lang} />
        </Field>
        <Field>
          <FieldLabel htmlFor='maxGuests'>Max Guest</FieldLabel>
          <Input
            required
            min={1}
            placeholder='0'
            className='peer w-full'
            type='number'
            id='maxGuests'
            name='maxGuests'
          />
        </Field>
      </FieldGroup>
      <Submit
        formAction={createCategory}
        Icon={IconDeviceFloppy}
        label={'Save'}
        variant='primary'
        type='submit'
        size='block'
      />
    </form>
  )
}
