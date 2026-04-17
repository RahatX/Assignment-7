import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import SectionTitle from "../components/SectionTitle";
import { getStatsData } from "../utils/storage";

function StatsPage() {
  const chartData = getStatsData();

  return (
    <section className="px-0 py-10">
      <SectionTitle
        eyebrow="Analytics"
        title="Friendship Analytics"
        subtitle=""
      />

      <div className="mx-auto max-w-5xl rounded-xl border border-[#e7edf5] bg-white p-5 shadow-sm">
        <p className="text-2xl font-bold text-[#245445]">By Interaction Type</p>

        <div className="h-[360px] w-full">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={64}
                  outerRadius={92}
                  paddingAngle={6}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 10,
                    border: "1px solid #e7edf5",
                    backgroundColor: "#ffffff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-6 text-sm">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-[#55657e]">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsPage;
