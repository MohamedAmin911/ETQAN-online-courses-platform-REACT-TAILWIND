export function HomeStatsSection({ stats }) {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="p-8">
              <h3 className="mb-2 text-4xl font-extrabold text-primary">{item.value}</h3>
              <p className="font-medium text-on-surface-variant">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
