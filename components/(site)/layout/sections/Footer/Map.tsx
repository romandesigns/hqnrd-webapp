export function Map({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="uppercase text-xs font-bold">Find Us in Google Maps</h3>
      <ul className="space-y-6 py-4 text-xs md:py-10 md:text-[0.90rem] text-muted-foreground [&>li]:hover:text-foreground cursor-pointer">
        <li className="mt-4 h-52 w-full overflow-hidden rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.735731141567!2d-70.4231043!3d19.3805922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae296e50e06303%3A0x4141e3bda5d73fec!2sHotel%20Quinto%20Nivel%20RD!5e0!3m2!1sen!2sus!4v1712705679198!5m2!1sen!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </li>
      </ul>
    </div>
  );
}
