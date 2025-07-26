import { ChatInput } from "@components/Chat";
import { Navbar } from "@components/Navbar";
import { Sidebar } from "@components/Sidebar";
import { ThemeProvider } from "@components/theme-provider";
import { useState } from "react";
import "./textarea-focus.css";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [text, setText] = useState("");

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <div className="flex h-screen bg-white dark:bg-gray-800">
        <Sidebar isPinnedOpen={isSidebarExpanded} onMenuClick={toggleSidebar} />
        <main className="flex-1 p-6 relative">
          <Navbar />
          <div className="absolute bottom-10 left-0 w-full flex justify-center">
            <div className="w-full max-w-3xl pb-0">
              <ChatInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                onSend={() => {
                  /*logica de envio */
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
