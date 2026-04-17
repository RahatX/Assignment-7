import { formatDate } from "../utils/storage";

function TimelineItem({ item }) {
  let icon = "📞";
  let action = "Call";

  if (item.type === "text") {
    icon = "💬";
    action = "Text";
  }

  if (item.type === "video") {
    icon = "📹";
    action = "Video";
  }

  return (
    <div className="rounded-[22px] border border-[#eceff4] bg-white px-6 py-5 shadow-[0_6px_18px_rgba(36,44,56,0.05)]">
      <div className="flex items-center gap-5">
        <div className="text-[52px] leading-none">{icon}</div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[24px] font-semibold text-[#1f3557]">
            <span className="font-bold text-[#123f37]">{action}</span> with {item.friendName}
          </h3>
          <p className="mt-1 text-[18px] text-[#6a7fa1]">{formatDate(item.date)}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
