"use client";

import { useEffect, useRef } from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "500" });

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];
const AUTO_SPEED = 0.5; // px per frame, right-to-left

export default function Photos({ data }) {
  const scrollerRef = useRef(null);
  const stateRef = useRef({ paused: false, dragging: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }

    let frame;

    // Keep scroll position within the first copy for a seamless infinite loop.
    const wrap = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) {
        return;
      }
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += half;
      }
    };

    const tick = () => {
      const state = stateRef.current;
      if (!state.paused && !state.dragging) {
        el.scrollLeft += AUTO_SPEED;
        wrap();
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!data || !Array.isArray(data.items) || data.items.length === 0) {
    return null;
  }

  // Duplicate the list so the marquee can loop seamlessly.
  const loopItems = [...data.items, ...data.items];

  const onPointerDown = (event) => {
    const el = scrollerRef.current;
    const state = stateRef.current;
    state.dragging = true;
    state.startX = event.clientX;
    state.startScroll = el.scrollLeft;
    el.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    const state = stateRef.current;
    if (!state.dragging) {
      return;
    }
    const el = scrollerRef.current;
    el.scrollLeft = state.startScroll - (event.clientX - state.startX);
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
      state.startScroll -= half;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += half;
      state.startScroll += half;
    }
  };

  const endDrag = (event) => {
    const state = stateRef.current;
    state.dragging = false;
    scrollerRef.current?.releasePointerCapture?.(event.pointerId);
  };

  const setPaused = (value) => () => {
    stateRef.current.paused = value;
  };

  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">{data.heading}</h2>
      <div
        ref={scrollerRef}
        className="no-scrollbar -mx-4 mt-5 flex cursor-grab overflow-x-auto py-2 select-none active:cursor-grabbing"
        onMouseEnter={setPaused(true)}
        onMouseLeave={setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
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
    </section>
  );
}
