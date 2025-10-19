import { Search } from "lucide-react";
import Form from "next/form";
import { Card } from "@/components/features";
import { Content, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateTimePicker";
import { InputNumber } from "@/components/ui/InputNumber";
import type { Locale } from "@/i18n-config";

export function RoomsFilter({ lang }: { lang: Locale }) {
  const CardHeader = () => (
    <div className="flex flex-col items-start justify-start gap-1">
      <h2 className="text-md font-semibold">Search Rooms</h2>
    </div>
  );

  return (
    <Section className="py-20 !lg:py-0">
      <Content className="">
        <Card
          aroundPadding
          className="pb-1 max-w-2xl mx-auto font-sans"
          Header={<CardHeader />}
        >
          <Form
            action={`/${lang}/habitaciones`}
            className="sm:grid-cols-2 sm:gap-4 sm:grid-rows-1 grid h-full w-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center justify-center gap-0 lg:gap-5 rounded-lg"
          >
            <div className="flex items-center justify-center gap-4 max-[754px]:gap-8">
              <InputNumber
                name="adultsCount"
                inputNumberLabel="Adults"
                iconName="FaUser"
                iconSize={13}
              />
              <InputNumber
                name="childrensCount"
                inputNumberLabel="Children"
                iconName="FaChild"
                iconSize={16}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <DateAndTimePicker
                lang={lang}
                granularity="minute"
                icon="calendar"
                hideIcon={true}
                label="Check In"
                minDate={new Date(new Date().setHours(0, 0, 0, 0))}
                displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
                inputName="checkIn"
              />
              <Button
                className="mt-5 p-5 lg:p-4.25 sm:hidden lg:flex"
                type="submit"
                variant="primary"
              >
                Search
              </Button>
              <Button
                size="icon"
                className="min-[641px]:flex justify-center items-center self-end hidden lg:hidden"
              >
                <Search />
              </Button>
            </div>
          </Form>
        </Card>
      </Content>
    </Section>
  );
}
