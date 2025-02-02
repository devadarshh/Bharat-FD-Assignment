import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      { label: "Users", data: [120, 150, 180, 200], backgroundColor: "rgba(75, 192, 192, 0.6)" },
    ],
  };

  return <Bar data={data} />;
};

export default ChartComponent;
