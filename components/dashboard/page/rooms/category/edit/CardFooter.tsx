import { Submit } from '@/components/features'
import { HiddenInput } from '@/components/features/Form'
import { IconRotateClockwise2 } from '@/components/icons'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import type { Id } from '@/convex/_generated/dataModel'
import type { Locale } from '@/i18n-config'
import { updateCategory } from '@/utils/actions'

export function CardFooter({
  lang,
  categoryId,
}: {
  lang: Locale
  categoryId: Id<'categories'>
}) {
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
        <HiddenInput defaultValue={categoryId} name='categoryId' />
      </FieldGroup>
      <Submit
        formAction={updateCategory}
        Icon={IconRotateClockwise2}
        label={'Update'}
        variant='primary'
        type='submit'
        size='block'
      />
    </form>
  )
}
