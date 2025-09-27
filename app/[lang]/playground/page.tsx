import { Card, Carousel } from "@/components/features";
import { Container } from "@/components/(site)/layout";
import { Locale } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export default async function PlaygroundPage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <Container lang={lang} showNavBar showFooter>
      <main className="font-sans w-full items-center justify-center min-h-screen gap-16 pt-0 h-screen">
        {/* <div className="max-width bg-red-500 mx-auto center h-[80vh] !p-20">
          <h2 className=" ">Playground</h2>
          <Carousel />
        </div> */}

        <Card
          className="max-w-md mx-auto my-40"
          Header={<h2>Card Header</h2>}
          Footer={
            <div className="space-x-2">
              <Button variant={"primary"}>Sign In</Button>
              <Button variant={"secondary"}>SignOut</Button>
            </div>
          }
          footerClassName="p-2 px-1"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum
            aliquid tempora nesciunt autem et beatae harum optio delectus. Ea
            soluta, iure unde quo similique magni cupiditate nihil enim quaerat.
          </p>
        </Card>

        <div className="max-w-md mx-auto bg-[#1c1c1e] text-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <h2 className="text-lg font-semibold mb-4">Update confirmation</h2>

          {/* Body */}
          <p className="text-sm text-gray-200 mb-3">
            Are you sure you want to update{" "}
            <span className="font-medium">Last Used Authentication Method</span>
            ?
          </p>

          {/* Warning */}
          <div className="flex items-start gap-2 bg-[#2c1f1f] border border-orange-600/70 rounded-md p-3 mb-3">
            <svg
              className="w-5 h-5 text-orange-500 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-orange-400">
              Make sure you're meeting the minimum requirements.
            </span>
          </div>

          {/* Info */}
          <p className="text-xs text-gray-400 mb-6">
            If you aren&apos;t satisfied with this upgrade you will have 24
            hours to revert it
          </p>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-md bg-[#635bff] hover:bg-[#5146d9] text-sm font-medium shadow-md">
              Update
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
}
