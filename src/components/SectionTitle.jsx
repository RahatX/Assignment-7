function SectionTitle({ title, subtitle, eyebrow = "Overview" }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b8799]">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-[#233142] sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6d7b90] sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
