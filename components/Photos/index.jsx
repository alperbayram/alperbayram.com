import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "500" });

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

export default function Photos({ data }) {
  if (!data || !Array.isArray(data.items) || data.items.length === 0) {
    return null;
  }

  // Duplicate the list so the CSS marquee can loop seamlessly.
  const loopItems = [...data.items, ...data.items];

  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">{data.heading}</h2>
      <div className="no-scrollbar photos-marquee-viewport -mx-4 mt-5 overflow-hidden py-2">
        <div className="photos-marquee flex w-max">
          {loopItems.map((item, index) => (
            <figure
              key={index}
              className={`${ROTATIONS[index % ROTATIONS.length]} mr-4 shrink-0 bg-white p-2 pb-3 shadow-md ring-1 ring-black/5 transition-transform duration-200 hover:rotate-0`}
            >
              <div className="h-40 w-40 overflow-hidden bg-gray-200">
                {item.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.caption || ""}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <figcaption className={`${caveat.className} mt-2 text-center text-sm text-gray-600`}>
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
