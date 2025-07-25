import React, { useState } from "react";
import { Sidebar } from "@components/Sidebar";
import { Navbar } from "@components/Navbar";
import { ThemeProvider } from "@components/theme-provider";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen bg-white dark:bg-gray-800">
        <Sidebar isPinnedOpen={isSidebarExpanded} onMenuClick={toggleSidebar} />
        <main className="flex-1 p-6">
          <Navbar />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
