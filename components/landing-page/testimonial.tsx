export function Testimonial() {
  return (
    <section className="py-20">
      <div className="container max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Customer Story
        </p>

        <blockquote className="mt-10 text-5xl font-medium leading-tight tracking-tight">
          “Arc is the first project management tool our engineers actually enjoy
          using.”
        </blockquote>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-indigo-500 via-violet-500 to-cyan-400" />
          <div>
            <p className="font-medium">Saad Anzari</p>

            <p className="text-white/45">
              AI Engineer <span className="font-mono"> ·Auro Labs</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
