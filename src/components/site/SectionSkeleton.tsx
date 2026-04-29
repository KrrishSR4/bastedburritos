export const SectionSkeleton = ({ height = "h-[600px]" }: { height?: string }) => (
  <section className={`py-16 sm:py-24 ${height}`}>
    <div className="mx-auto max-w-7xl px-6 space-y-6">
      <div className="h-6 w-40 mx-auto rounded-full shimmer" />
      <div className="h-12 w-2/3 mx-auto rounded-2xl shimmer" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-3xl overflow-hidden glass">
            <div className="aspect-[4/3] shimmer" />
            <div className="p-5 space-y-3">
              <div className="h-5 w-2/3 rounded shimmer" />
              <div className="h-4 w-full rounded shimmer" />
              <div className="h-4 w-1/2 rounded shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);