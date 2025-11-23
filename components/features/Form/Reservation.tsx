import clsx from "clsx";
import { IconHazeMoon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateTimePicker";
import { InputNumber } from "@/components/ui/InputNumber";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Locale } from "@/i18n-config";
import { createReservation } from "@/utils/actions/reservation";
import { Card } from "../Cards";

interface ReservationProps {
  lang: Locale;
  className?: string;
  slug: string;
  title?: string;
}
// interface ReservationProps {
//   lang: Locale;
//   unitNumber?: number;
//   category?: string;
//   pricePerNight?: number;
//   className?: string;
//   slug: string;
//   formReturnedDefaults: {
//     adults: number;
//     children: number;
//     checkIn?: string;
//     checkOut?: string;
//     message: string;
//   };
// }

export function ReservationForm({
  lang,
  slug,
  className,
  title,
}: ReservationProps) {
  return (
    <Card
      aroundPadding
      className={clsx("lg:block lg:sticky lg:top-48", className)}
      Header={
        title ? (
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-sans">{title}</h3>
            <span className="flex items-center justify-between gap-1 uppercase p-2 font-bold border border-(--brand-primary)/50 rounded bg-(--brand-primary)/30">
              3,250<span>/</span>
              <IconHazeMoon />
            </span>
          </div>
        ) : null
      }
    >
      <form
        className={clsx(
          "p-6 pb-4 flex flex-col gap-6 [@width<300px]:py-2 [@width>230px]:py-4",
        )}
      >
        <div className="flex gap-6">
          <InputNumber
            name="adults"
            iconName="FaUser"
            iconSize={14}
            inputNumberLabel="Adults"
          />
          <InputNumber
            name="children"
            iconName="FaChild"
            iconSize={14}
            inputNumberLabel="Children"
          />
        </div>
        <div className="flex gap-6">
          <DateAndTimePicker
            lang={lang}
            granularity="minute"
            icon="calendar"
            hideIcon={true}
            label="Check In"
            minDate={new Date(new Date().setHours(0, 0, 0, 0))}
            displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
            inputName="checkIn"
            align="start"
            sideOffset={-180}
          />
          <DateAndTimePicker
            lang={lang}
            granularity="day"
            icon="calendar"
            hideIcon={true}
            label="Check Out"
            minDate={new Date(new Date().setHours(0, 0, 0, 0))}
            displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
            inputName="checkOut"
            align="end"
            sideOffset={-180}
            time={"11:30 AM"}
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-muted-foreground">
            Message (Optional)
          </Label>
          <Textarea className="h-36 mt-2" name="message" />
          <input type="hidden" name="lang" defaultValue={lang} />
          <input type="hidden" name="slug" defaultValue={slug} />
          <input type="hidden" name="unitNumber" />
          <input type="hidden" name="pricePerNight" />
          <input type="hidden" name="category" />
          <Button
            type="submit"
            size="block"
            className="mt-10"
            formAction={createReservation}
          >
            Add Booking
          </Button>
        </div>
      </form>
    </Card>
  );
}
