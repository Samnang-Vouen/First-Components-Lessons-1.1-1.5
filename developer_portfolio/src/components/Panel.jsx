function Panel({ title, children }) {
  return (
    <section className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
      {title && <h2 className="text-lg font-semibold text-gray-900">{title}</h2>}
      {children}
    </section>
  )
}

export default Panel
