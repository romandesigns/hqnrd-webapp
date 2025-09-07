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
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-md">
      {/* Card Header */}
      {Header && (
        <div className="p-2">
          <Header />
        </div>
      )}
      {/* Card Body */}
      {children && (
        <div className="bg-[var(--card-body)] border-[var(--card-border)] shadow-sm shdaow dark:shadow-black border-b rounded-md inset-shadow-md inset-shadow-amber-100">
          <div className="p-2">{children}</div>
        </div>
      )}
      {/* Card Footer */}
      {Footer && (
        <div  className="p-2">
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
