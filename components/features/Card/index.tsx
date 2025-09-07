const Header = () => <div className="p-2">Header</div>;
const Footer = () => <div className="p-2">Footer</div>;

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
    <div className="bg-[var(--card)] rounded-md w-full max-w-md border-[var(--popover)]">
      {/* Card Header */}
      {Header && (
        <div className="p-0.5">
          <Header />
        </div>
      )}
      {/* Card Body */}
      {children && (
        <div className="p-0.5">
          <div className="bg-[var(--card-body)] shadow-sm dark:shadow-black dark:border-t rounded-md inset-shadow-md p-2 px-3">
            {children}
          </div>
        </div>
      )}
      {/* Card Footer */}
      {Footer && (
        <div className="p-0.5 px-1">
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
      <p>Looking Good</p>
    </CardComponent>
  );
}
