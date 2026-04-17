import { Link } from "react-router-dom";
import { getStatusClass, getTagClass } from "../utils/style";

function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="group rounded-[26px] border border-[#e7edf5] bg-white px-8 pb-10 pt-8 text-center shadow-[0_6px_18px_rgba(36,44,56,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(36,44,56,0.08)]"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-24 w-24 rounded-full object-cover"
      />

      <h3 className="mt-8 text-[25px] font-bold tracking-[-0.04em] text-[#1f3557]">{friend.name}</h3>
      <p className="mt-5 text-[17px] text-[#6a7fa1]">{friend.days_since_contact}d ago</p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.01em] ${getTagClass(
              index
            )}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <span
          className={`rounded-full px-6 py-2.5 text-[11px] font-bold capitalize ${getStatusClass(friend.status)}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
}

export default FriendCard;
