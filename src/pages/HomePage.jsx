import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FriendCard from "../components/FriendCard";
import LoadingSpinner from "../components/LoadingSpinner";

function HomePage() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setError("");
      })
      .catch(() => {
        setError("Could not load friends data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="rounded-[28px] border border-[#e7edf5] bg-white p-10 text-center shadow-sm">
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#233142]">Something went wrong</h2>
        <p className="mt-3 text-[16px] text-[#6d7b90]">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-10">
      <Banner friends={friends} />

      <section className="px-0">
        <div className="mb-9">
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#1f3557]">Your Friends</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
