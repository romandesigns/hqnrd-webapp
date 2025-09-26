"use client";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Locale } from "@/i18n-config";
import { enUS, es } from "date-fns/locale";
import React from "react";
import { DateTimePicker, Granularity } from "./dateTime";

export function DateAndTimePicker({
  lang,
  hideIcon,
  label,
  icon,
  granularity,
  minDate,
  inputName,
  displayFormat,
  time,
  align,
  sideOffset,
  defaultValue,
}: {
  lang: Locale;
  hideIcon?: boolean;
  label: string;
  icon: string;
  granularity: Granularity;
  minDate?: Date;
  inputName: string;
  displayFormat?: { hour12: string };
  time?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
  defaultValue?: Date | null;
}) {
  const [date12, setDate12] = React.useState<Date | undefined>(
    defaultValue || undefined,
  );

  return (
    <Label className="!m-0 flex-1 flex-col pb-0" htmlFor="date">
      {icon === "calendar" ? (
        <div className="flex items-center justify-start gap-3 w-full">
          <IconCalendarWeekFilled size={18} />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ) : (
        <span className="text-xs text-muted-foreground">{label}</span>
      )}
      <DateTimePicker
        hourCycle={12}
        value={date12}
        onChange={setDate12}
        locale={lang === "es" ? es : enUS}
        placeholder="--/--/----"
        granularity={granularity || "day"}
        hideIcon={hideIcon}
        className="hover:bg-transparent"
        labelFor="date"
        minDate={minDate}
        displayFormat={displayFormat}
        inputName={inputName}
        time={time}
        align={align}
        sideOffset={sideOffset}
        weekStartsOn={undefined}
        showWeekNumber={undefined}
        showOutsideDays={undefined}
      />
    </Label>
  );
}
