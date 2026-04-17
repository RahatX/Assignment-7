import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="section-shell rounded-[36px] px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7A897F]">404</p>
      <h1 className="mt-4 font-serif text-5xl font-semibold text-[#1F4036]">
        This page wandered off.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#667870] sm:text-base">
        The page you were looking for does not exist anymore, but your friendship dashboard is still safely waiting on the home screen.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-[#245445] px-6 py-3 text-sm font-semibold text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
