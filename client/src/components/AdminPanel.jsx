import { useState } from "react";
import { BarChart, Users, Settings, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/navbar";
import { Table } from "@/components/ui/table";
import { ThemeProvider } from "@/components/ui/theme-provider";

export default function AdminPanel() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <ThemeProvider value={darkMode ? "dark" : "light"}>
      <div className="flex h-screen w-full">
        <Sidebar>
          <Sidebar.Item icon={BarChart} label="Dashboard" />
          <Sidebar.Item icon={Users} label="Users" />
          <Sidebar.Item icon={Settings} label="Settings" />
        </Sidebar>
        <div className="flex flex-col flex-grow p-6 bg-gray-100 dark:bg-gray-900">
          <Navbar>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <Button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun /> : <Moon />}
            </Button>
          </Navbar>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardContent>Users: 1200</CardContent>
            </Card>
            <Card>
              <CardContent>Revenue: $50K</CardContent>
            </Card>
            <Card>
              <CardContent>Active Sessions: 85</CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Table />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
