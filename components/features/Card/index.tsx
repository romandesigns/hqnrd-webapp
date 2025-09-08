export function Card({
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
      {Header && (
        <div className="p-2">
          <Header />
        </div>
      )}
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