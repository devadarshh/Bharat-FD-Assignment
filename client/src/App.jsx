import { ThemeProvider } from "./components/ui/theme-provider";
import Sidebar from "./components/ui/sidebar";
import Navbar from "./components/ui/navbar";
import DashboardCards from "./components/ui/DashboardCards";
import ChartComponent from "./components/ui/ChartComponent";
import DataTable from "./components/ui/DataTable";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-6 space-y-6">
            <DashboardCards />
            {/* <ChartComponent /> */}
            <DataTable />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
