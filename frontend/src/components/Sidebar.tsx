// src/components/Sidebar.tsx
import { Button } from "@components/ui/button";
import { Menu, MessageSquare, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "./lib/utils";

interface SidebarProps {
  isPinnedOpen: boolean;
  onMenuClick: () => void;
}

export function Sidebar({ isPinnedOpen, onMenuClick }: SidebarProps) {
  const [isHovering, setIsHovering] = useState(false);

  const { theme, setTheme } = useTheme();

  const isExpanded = isPinnedOpen || isHovering;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // ...existing code...
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "flex h-full flex-col border-r p-2 transition-all duration-300 bg-background text-foreground",
        isExpanded ? "w-64" : "w-16 items-center"
      )}
    >
      <img
        src={
          theme === "dark"
            ? "images/sinapse-logo-better-quality.png"
            : "images/sinapse-logo-bright.png"
        }
        alt="logo"
        className="w-8 h-8 mb-4"
        style={
          theme === "dark" ? { filter: "drop-shadow(0 0 8px #8A2BE2)" } : {}
        }
      />
      <div className="flex-1">
        <Button
          className={cn(
            "w-full justify-start gap-2 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground border-none shadow-md",
            isExpanded ? "pl-2" : "justify-center"
          )}
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2 bg-support text-card-foreground border-none",
            isExpanded ? "pl-2" : "justify-center"
          )}
        >
          <MessageSquare className="h-5 w-5" />
          {isExpanded && <span>Nova Conversa</span>}
        </Button>
      </div>
      <div className="mt-auto">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2 border-none",
            isExpanded ? "pl-2" : "justify-center"
          )}
          style={
            theme === "dark"
              ? {
                  background:
                    "linear-gradient(90deg, #8A2BE2 0%, #C71585 100%)",
                  color: "#E0E0E0",
                }
              : {}
          }
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          {theme == "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          {isExpanded && (
            <span>{theme == "dark" ? "Modo Claro" : "Modo Escuro"}</span>
          )}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2 bg-support text-card-foreground border-none",
            isExpanded ? "pl-2" : "justify-center"
          )}
        >
          <Settings className="h-5 w-5" />
          {isExpanded && <span>Configurações</span>}
        </Button>
      </div>
    </div>
  );
}