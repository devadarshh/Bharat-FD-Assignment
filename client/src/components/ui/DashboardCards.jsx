import Card from "./card";

const DashboardCards = () => {
  const stats = [
    { title: "Total Users", value: "1,234", color: "bg-blue-500" },
    { title: "Revenue", value: "$12,340", color: "bg-green-500" },
    { title: "Active Sessions", value: "89", color: "bg-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.color} text-white`}>
          <h2 className="text-lg">{stat.title}</h2>
          <p className="text-2xl font-bold">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;
