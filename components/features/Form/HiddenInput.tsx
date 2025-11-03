import { Input } from '@/components/ui/input'

export function HiddenInput({
  name,
  defaultValue,
}: {
  name: string
  defaultValue: string
}) {
  return (
    <Input
      readOnly
      className='hidden'
      type='text'
      name={name}
      defaultValue={defaultValue}
    />
  )
}
