import { ThemeProvider } from "./providers/theme-provider";
import { useState } from "react";
import { Navbar } from "./features/layout/components/Navbar";
import "./features/chat/styles/textarea-focus.css";
import { ChatBubble } from "./features/chat/components/ChatBubble";
import { Sidebar } from "./features/layout/components/Sidebar";
import { ChatInput } from "./features/chat/components/Chat";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "system" }[]
  >([]);

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
          <div className="flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <ChatBubble key={idx} message={msg.text} sender={msg.sender} />
            ))}
          </div>
          <div className="absolute bottom-10 left-0 w-full flex justify-center">
            <div className="w-full max-w-3xl pb-0">
              <ChatInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                onSend={() => {
                  const cleanedText = text
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .join("\n");
                  if (!cleanedText.trim()) return;
                  setMessages((prev) => [...prev, { text, sender: "user" }]);
                  fetch(
                    `http://localhost:8080/api/chat/ai/generate?message=${text}`
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      setMessages((prev) => [
                        ...prev,
                        { text: data.result, sender: "system" },
                      ]);
                    });
                  setText("");
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
