import { useEffect, useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaMessage,
  FaPhoneVolume,
  FaTrashCan,
  FaVideo,
} from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";
import { addTimelineEntry, formatDate } from "../utils/storage";
import { getStatusClass } from "../utils/style";

function FriendDetailsPage() {
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const singleFriend = data.find((item) => item.id === Number(id));
        setFriend(singleFriend);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!friend) {
    return (
      <div className="section-shell rounded-[36px] p-10 text-center">
        <h2 className="text-4xl font-semibold text-[#233142]">Friend not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-full bg-[#245445] px-5 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleCheckIn = (type) => {
    addTimelineEntry(friend, type);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} logged for ${friend.name}`);
  };

  const actions = [
    { type: "call", label: "Call", icon: <FaPhoneVolume size={24} /> },
    { type: "text", label: "Text", icon: <FaMessage size={24} /> },
    { type: "video", label: "Video", icon: <FaVideo size={24} /> },
  ];

  return (
    <div className="py-10">
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          <div className="rounded-xl border border-[#e7edf5] bg-white p-6 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <h1 className="mt-4 text-[30px] font-bold tracking-[-0.03em] text-[#233142]">
              {friend.name}
            </h1>
            <div className="mt-2 flex justify-center">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold capitalize ${getStatusClass(friend.status)}`}
              >
                {friend.status}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#dff5e5] px-2.5 py-1 text-[10px] font-semibold uppercase text-[#47735f]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-base italic text-[#4f6179]">"{friend.bio}"</p>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[#6b7890]">
              <FaEnvelope className="text-[#245445]" />
              <span>Preferred: email</span>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[#e3e9f1] bg-white px-4 py-3 text-sm font-semibold text-[#233142]">
            <FaBell size={12} />
            Snooze 2 Weeks
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[#e3e9f1] bg-white px-4 py-3 text-sm font-semibold text-[#233142]">
            Archive
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[#f1d6d6] bg-white px-4 py-3 text-sm font-semibold text-[#ef4444]">
            <FaTrashCan size={12} />
            Delete
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[#e7edf5] bg-white p-5 text-center shadow-sm">
              <h3 className="text-5xl font-bold tracking-[-0.03em] text-[#245445]">
                {friend.days_since_contact}
              </h3>
              <p className="mt-2 text-sm text-[#6d7b90]">Days Since Contact</p>
            </div>
            <div className="rounded-xl border border-[#e7edf5] bg-white p-5 text-center shadow-sm">
              <h3 className="text-5xl font-bold tracking-[-0.03em] text-[#245445]">
                {friend.goal}
              </h3>
              <p className="mt-2 text-sm text-[#6d7b90]">Goal (Days)</p>
            </div>
            <div className="rounded-xl border border-[#e7edf5] bg-white p-5 text-center shadow-sm">
              <h3 className="text-4xl font-bold tracking-[-0.03em] text-[#245445]">
                {formatDate(friend.next_due_date)}
              </h3>
              <p className="mt-2 text-sm text-[#6d7b90]">Next Due</p>
            </div>
          </div>

          <div className="rounded-xl border border-[#e7edf5] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-bold tracking-[-0.03em] text-[#245445]">
                  Relationship Goal
                </p>
                <p className="mt-4 text-lg text-[#4f6179]">
                  Connect every <span className="font-bold">{friend.goal} days</span>
                </p>
              </div>
              <button className="rounded-md border border-[#e3e9f1] bg-white px-4 py-2 text-sm font-semibold text-[#233142]">
                Edit
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-[#e7edf5] bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold tracking-[-0.03em] text-[#245445]">Quick Check-In</p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {actions.map((action) => (
                <button
                  key={action.type}
                  onClick={() => handleCheckIn(action.type)}
                  className="flex flex-col items-center justify-center gap-3 rounded-md border border-[#e3e9f1] bg-[#fbfdff] px-4 py-6 text-base font-medium text-[#233142]"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetailsPage;
