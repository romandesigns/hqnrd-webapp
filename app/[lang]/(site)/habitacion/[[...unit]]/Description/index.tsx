import { Card } from '@/components/features'

export function Description() {
  return (
    <Card  Header={<h3 className="font-bold text-xl px-2">Description</h3>}>
      <div className="[&>p]:mt-2 [&>p]:leading-relaxed text-sm">
        <p>
          The Basic Room is a cozy space for relaxation and tranquility. The room is equipped with a
          comfortable bed, a private bathroom, and a balcony.The room is equipped with a comfortable
          bed, a private bathroom, and a balcony.
        </p>
        <p>The room is ideal for couples or solo travelers looking for a peaceful escape.</p>
      </div>
    </Card>
  )
}
