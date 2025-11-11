import Link from "next/link";

export default function NotFound() {
  return (
    <section className="overflow-hidden pt-45 pb-25 lg:pt-50 lg:pb-32.5 xl:pt-55 xl:pb-37.5">
      <div className="mx-auto max-w-[518px] text-center">
        <img src="/images/shape/404.svg" alt="404" className="mx-auto mb-7.5" />

        <h2 className="mb-5 text-2xl font-semibold text-black md:text-4xl dark:text-white">
          This Page Does Not Exist
        </h2>
        <p className="mb-7.5">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Link
          href="/"
          className="hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}
