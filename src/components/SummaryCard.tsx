export default function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div className="p-4 rounded-2xl shadow border bg-white">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}