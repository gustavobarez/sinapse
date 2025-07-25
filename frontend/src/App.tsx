import { Navbar } from "@components/Navbar";
import { Sidebar } from "@components/Sidebar";
import { TextArea } from "@components/TextArea";
import { ThemeProvider } from "@components/theme-provider";
import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
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
              <div className="w-full border rounded-2xl shadow overflow-hidden bg-white dark:bg-gray-800">
                <TextArea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="resize-none w-full border-none rounded-t-2xl p-3 text-base min-h-[10px] max-h-[152px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 bg-transparent outline-none textarea-focus-top"
                  placeholder="Digite sua mensagem..."
                />
                <div className="w-full flex justify-between items-center px-4 py-2 rounded-b-2xl bg-white dark:bg-gray-800">
                  <button>
                    <FaPaperclip />
                  </button>
                  <button>
                    <FiSend size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
