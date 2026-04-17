import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { getTimeline } from "../utils/storage";

function TimelinePage() {
  const [filter, setFilter] = useState("all");
  const timeline = getTimeline();

  const filteredTimeline = useMemo(() => {
    if (filter === "all") {
      return timeline;
    }

    return timeline.filter((item) => item.type === filter);
  }, [filter, timeline]);

  return (
    <section className="px-0 py-10">
      <SectionTitle
        eyebrow="Timeline"
        title="Timeline"
        subtitle=""
      />

      <div className="mb-5 max-w-[260px]">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="w-full rounded-md border border-[#dbe4ef] bg-white px-3 py-2 text-sm text-[#6d7b90] outline-none"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredTimeline.length > 0 ? (
          filteredTimeline.map((item) => <TimelineItem key={item.id} item={item} />)
        ) : (
          <div className="py-16 text-center text-[24px] text-[#111827]">
            No data found!
          </div>
        )}
      </div>
    </section>
  );
}

export default TimelinePage;
