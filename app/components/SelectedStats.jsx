import { useGlobalSettings } from "../contexts/GlobalSettingsContext";
import { useStats } from "../contexts/StatsContext";
import useGetSelectedStyleId from "../hooks/useGetSelectedStyleId";

export default function SelectedStats() {
  const { stats } = useStats();
  const { globalSettings } = useGlobalSettings();
  const selectedId = useGetSelectedStyleId(stats.options.styleSelections);
  const { headline, subtitle, description } = stats.options;
  // Dynamically determine the grid class based on the number of stats
  const getGridColsClass = () => {
    const length = stats.options.statsList.length;

    if (length === 1) return "grid-cols-1";
    if (length === 2) return "grid-cols-2";
    if (length === 3) return "grid-cols-3";
    if (length === 4) return "grid-cols-4";
    if (length === 5) return "grid-cols-5";
    // Adjust as needed for larger numbers
    return "grid-cols-1"; // Default fallback
  };
  if (selectedId === "image_on_left") {
    return (
      <div className="relative bg-white">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2
                className="text-base font-semibold leading-8 text-indigo-600"
                style={{ color: globalSettings.colors.brandColor }}
              >
                {subtitle.text}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {headline?.text}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description.text}
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.options.statsList.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                  >
                    <dt className="text-sm leading-6 text-gray-600">
                      {stat.description}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      {stat.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selectedId === "image_background_with_text") {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-indigo-400"
            style={{ color: globalSettings.colors.brandColor }}>
              {" "}
              {subtitle?.text}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {headline?.text}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description.text}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.options.statsList.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="text-sm leading-6">{stat.description}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {" "}
                  {stat.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {selectedId === "with_title" ? (
          <div className="mx-auto max-w-2xl lg:max-w-none mb-12">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-8 text-indigo-600"
              style={{ color: globalSettings.colors.brandColor }}>
                {subtitle?.text}
              </h2>
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {headline?.text}
              </p>
              <p className="mt-4 text-lg max-w-2xl mx-auto leading-8 text-gray-600">
                {description.text}
              </p>
            </div>
          </div>
        ) : null}

        <dl
          className={`mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:${getGridColsClass()}`}
        >
          {stats.options.statsList.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">
                {stat.description}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {stat.name}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
