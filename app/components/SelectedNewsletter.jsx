import NewsletterWrapper from "./newsletter/NewsletterWrapper";
import SelectedIconStyle from "./SelectedIconStyle";
import { useNewsletter } from "../contexts/NewsletterContext";
import useGetSelectedStyleId from "../hooks/useGetSelectedStyleId";

export default function SelectedNewsletter() {
  const { newsletter } = useNewsletter();
  const { iconsStyle } = newsletter.options;
  const selectedIconId = useGetSelectedStyleId(iconsStyle);
  const { styleSelections } = newsletter.options;
  const selectedId = useGetSelectedStyleId(styleSelections);

  if (selectedId === "with-bullet-points") {
    return (
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="relative isolate overflow-hidden  px-6 sm:rounded-3xl sm:px-24  text-gray-900">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight  sm:text-4xl">
                {newsletter?.options?.headline?.text}
              </h2>
              <p className="mx-auto mt-2 max-w-xl  text-lg leading-8 ">
                {newsletter?.options?.subheadline?.text}
              </p>
              <form className="w-full max-w-md mx-auto lg:col-span-5 lg:pt-5">
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {newsletter?.options?.button?.text}
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-900">
                  {newsletter?.options?.privacyNote?.text}{" "}
                  <a
                    href={newsletter?.options?.privacyNote?.link}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                
                <SelectedIconStyle selectedId={selectedIconId} Icon={newsletter.options.bulletPoints[0].icon} />
                
                <dt className="mt-4 font-semibold ">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-800">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                
                <SelectedIconStyle selectedId={selectedIconId} Icon={newsletter.options.bulletPoints[1].icon} />
                
                <dt className="mt-4 font-semibold ">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-800">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }
  if (selectedId === "stacked-centered") {
    return (
      <NewsletterWrapper>
        <div className="bg-white py-16 sm:py-24 ">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden  px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32 text-gray-900">
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight  sm:text-4xl">
                {newsletter?.options?.headline?.text}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 ">
                {newsletter?.options?.subheadline?.text}
              </p>
              <form className="w-full max-w-md mx-auto lg:col-span-5 lg:pt-5">
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {newsletter?.options?.button?.text}
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-900">
                  {newsletter?.options?.privacyNote?.text}{" "}
                  <a
                    href={newsletter?.options?.privacyNote?.link}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </NewsletterWrapper>
    );
  }

  return (
    <>
      <NewsletterWrapper>
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            {newsletter?.options?.headline?.text}
          </h2>{" "}
          <p className="inline sm:block lg:inline xl:block">
            {newsletter?.options?.subheadline?.text}
          </p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {newsletter?.options?.button?.text}
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            {newsletter?.options?.privacyNote?.text}{" "}
            <a
              href={newsletter?.options?.privacyNote?.link}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </NewsletterWrapper>
    </>
  );
}
