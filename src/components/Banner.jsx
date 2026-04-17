import { FaPlus } from "react-icons/fa6";

function Banner({ friends }) {
  const totalFriends = friends.length;
  const onTrack = friends.filter((friend) => friend.status === "on-track").length;
  const almostDue = friends.filter((friend) => friend.status === "almost due").length;
  const overdue = friends.filter((friend) => friend.status === "overdue").length;

  const summaryCards = [
    { id: 1, title: "Total Friends", value: totalFriends },
    { id: 2, title: "On Track", value: onTrack },
    { id: 3, title: "Need Attention", value: almostDue + overdue },
    { id: 4, title: "Interactions This Month", value: 12 },
  ];

  return (
    <section className="px-0 py-12 sm:py-16">
      <div className="text-center">
        <h2 className="mx-auto max-w-[1480px] text-[52px] font-bold tracking-[-0.05em] text-[#1d2430] sm:text-[78px] sm:leading-[1.04]">
          Friends to keep close in your life
        </h2>
        <p className="mx-auto mt-6 max-w-[1380px] text-[18px] leading-9 text-[#5d7393] sm:text-[22px]">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <button className="inline-flex items-center gap-3 rounded-md bg-[#245445] px-8 py-4 text-[18px] font-semibold text-white">
            <FaPlus size={16} />
            Add a Friend
          </button>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1760px] gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <div
              key={card.id}
              className="rounded-[28px] border border-[#e6edf6] bg-white px-8 py-12 text-center shadow-[0_6px_18px_rgba(36,44,56,0.05)]"
            >
              <h3 className="text-[62px] font-bold leading-none text-[#245445]">{card.value}</h3>
              <p className="mt-7 text-[18px] font-medium text-[#5c7392]">{card.title}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[1760px] border-t border-[#dde6f1]" />
      </div>
    </section>
  );
}

export default Banner;
