export function getStatusClass(status) {
  if (status === "overdue") {
    return "bg-[#FFD9CC] text-[#B35718]";
  }

  if (status === "almost due") {
    return "bg-[#FFF0B8] text-[#9A6C00]";
  }

  return "bg-[#D8ECD8] text-[#1F5D4D]";
}

export function getTagClass(index) {
  const classes = [
    "bg-[#CFF5D8] text-[#1F6C59]",
    "bg-[#CFF5D8] text-[#1F6C59]",
  ];

  return classes[index % classes.length];
}
