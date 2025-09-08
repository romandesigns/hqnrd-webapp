import { IconAlertTriangle } from '@tabler/icons-react'

const Header = () => <div className="">Header</div>;
const Footer = () => <div className="">Footer</div>;

export function CardComponent({
  Header,
  Footer,
  children,
}: {
  Header?: React.FC;
  Footer?: React.FC;
  children: React.ReactNode;
}) {
  return (
    // Card Container
    <div className="bg-[var(--card-container)] rounded-md w-full max-w-md border border-[var(--card-border)] p-0.5">
      {/* Card Header */}
      {/* {Header && (
        <div className="p-2">
          <Header />
        </div>
      )} */}
      {/* Card Body */}
      {children && (
        <div className="rounded-sm bg-[var(--card-body)] p-0.5 shadow-md shadow-black/10 dark:shadow-black">
          <div className="bg-[var(--card-body-inner)] rounded-sm">
            {children}
          </div>
        </div>
      )}
      {/* Card Footer */}
      {Footer && (
        <div className="p-2">
          <Footer />
        </div>
      )}
    </div>
  );
}

export function Card() {
  return (
    // Card Container
    <CardComponent Header={Header} Footer={Footer}>
      <div className='p-8'>
        <h2 className="text-lg font-bold">Delete development user</h2>
        <p className="text-xs text-muted-foreground">Are you sure you want to delete this user?</p>
        <div className="h-0.5 my-4 w-full bg-border"/>
        <p className="text-xs text-destructive flex items-center gap-2"><IconAlertTriangle/> This action is permanent and cannot be undone</p>
      </div>
    </CardComponent>
  );
}
