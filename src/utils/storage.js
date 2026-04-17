export function getTimeline() {
  const savedTimeline = localStorage.getItem("keenkeeper-timeline");

  if (savedTimeline) {
    return JSON.parse(savedTimeline);
  }

  return [];
}

export function saveTimeline(timeline) {
  localStorage.setItem("keenkeeper-timeline", JSON.stringify(timeline));
}

export function addTimelineEntry(friend, type) {
  const oldTimeline = getTimeline();
  const typeName = type.charAt(0).toUpperCase() + type.slice(1);

  const newEntry = {
    id: Date.now(),
    type,
    friendId: friend.id,
    friendName: friend.name,
    title: `${typeName} with ${friend.name}`,
    date: new Date().toISOString().split("T")[0],
  };

  const updatedTimeline = [newEntry, ...oldTimeline];
  saveTimeline(updatedTimeline);
  return updatedTimeline;
}

export function getStatsData() {
  const timeline = getTimeline();

  const calls = timeline.filter((item) => item.type === "call").length;
  const texts = timeline.filter((item) => item.type === "text").length;
  const videos = timeline.filter((item) => item.type === "video").length;

  return [
    { name: "Text", value: texts, color: "#7C3AED" },
    { name: "Call", value: calls, color: "#245445" },
    { name: "Video", value: videos, color: "#38A169" },
  ];
}

export function formatDate(dateText) {
  const date = new Date(dateText);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
