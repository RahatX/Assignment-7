function LoadingSpinner() {
  return (
    <div className="section-shell flex min-h-[320px] items-center justify-center rounded-[34px] px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-[5px] border-[#D8E7DA] border-t-[#245445]" />
          <div className="absolute inset-[10px] rounded-full bg-[#FFF8F0]" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#809088]">
            Loading
          </p>
          <p className="mt-2 text-sm text-[#667870]">Preparing your friendship dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
