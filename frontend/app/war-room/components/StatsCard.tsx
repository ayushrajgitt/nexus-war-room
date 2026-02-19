interface Props {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-3xl font-bold mt-2 text-purple-400">{value}</p>
    </div>
  );
}
