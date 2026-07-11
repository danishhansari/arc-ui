// const companies = ["Vantage", "Northwind", "Fluent", "Marrow", "Talon", "Ridgeline"];

// export function LogoStrip() {
//   return (
//     <section className="border-y border-white/6 py-10">
//       <div className="container">
//         <p className="mb-6 text-center text-[12px] uppercase tracking-[0.14em] text-foreground-subtle">
//           Trusted by product teams at
//         </p>
//         <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60 grayscale">
//           {companies.map((name) => (
//             <span
//               key={name}
//               className="text-[16px] font-semibold tracking-tight text-foreground-muted"
//             >
//               {name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const companies = [
//   { name: "Vantage", className: "font-bold tracking-tight" },
//   { name: "Northwind", className: "font-medium tracking-wide" },
//   { name: "Fluent", className: "italic font-semibold" },
//   { name: "Marrow", className: "font-black uppercase text-[15px]" },
//   { name: "Talon", className: "font-semibold" },
//   { name: "Ridgeline", className: "font-light tracking-[0.15em]" },
// ];

// export function LogoStrip() {
//   return (
//     <section className="border-y border-white/5 py-14">
//   <div className="container">
//     <p className="mb-10 text-center text-xs uppercase tracking-[0.24em] text-white/40">
//       Trusted by teams building modern products
//     </p>

//     <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
//       {companies.map((company) => (
//         <div
//           key={company.name}
//           className="flex items-center justify-center"
//         >
//           <span className="text-lg font-semibold text-white/45 transition-colors duration-300 hover:text-white">
//             {company.name}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   );
// }

const companies = [
  "Vantage",
  "Northwind",
  "Fluent",
  "Marrow",
  "Talon",
  "Ridgeline",
];

export function LogoStrip() {
  return (
    <section className="border-y border-white/5 py-14">
      <div className="container">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.24em] text-white/40">
          Trusted by product teams at
        </p>

        <div className="hidden grid-cols-6 lg:grid">
          {companies.map((company) => (
            <div key={company} className="flex items-center justify-center">
              <span className="text-lg font-semibold text-white/45 transition-colors duration-300 hover:text-white">
                {company}
              </span>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden lg:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12" />

          <div className="flex w-max animate-logo-strip">
            {[...companies, ...companies].map((company, i) => (
              <div key={`${company}-${i}`} className="flex items-center">
                {i !== 0 && (
                  <div className="mx-6 h-1 w-1 rounded-full" />
                )}

                <span className="text-lg font-semibold text-white/45 transition-colors duration-300 hover:text-white">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
