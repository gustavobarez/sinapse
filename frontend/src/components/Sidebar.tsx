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

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "flex h-full flex-col border-r transition-all duration-300 bg-background text-foreground",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex justify-center py-4 px-2">
        <img
          src={"images/sinapse-logo-better-quality-semfundo.png"}
          className="w-[60px] h-[36px] object-contain"
          alt="logo"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <div className="px-2">
          <Button
            className="w-full h-12 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground border-none shadow-md flex items-center relative"
            variant="ghost"
            onClick={onMenuClick}
          >
            <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
              <Menu className="h-5 w-5" />
            </span>
            {isExpanded && (
              <div className="flex-1 text-left text-base whitespace-nowrap overflow-hidden pl-8">
                Menu
              </div>
            )}
          </Button>
        </div>

        <div className="px-2">
          <Button
            variant="ghost"
            className="w-full h-12 bg-support text-card-foreground border-none flex items-center relative"
          >
            <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
              <MessageSquare className="h-5 w-5" />
            </span>
            {isExpanded && (
              <div className="flex-1 text-left text-base whitespace-nowrap overflow-hidden pl-8">
                Nova Conversa
              </div>
            )}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <Button
          variant="ghost"
          className="w-full h-12 border-none flex items-center relative"
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
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
            {theme == "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </span>
          {isExpanded && (
            <div className="flex-1 text-left whitespace-nowrap overflow-hidden pl-8">
              {theme == "dark" ? "Modo Claro" : "Modo Escuro"}
            </div>
          )}
        </Button>

        <Button
          variant="ghost"
          className="w-full h-12 bg-support text-card-foreground border-none flex items-center relative"
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
            <Settings className="h-5 w-5" />
          </span>
          {isExpanded && (
            <div className="flex-1 text-left whitespace-nowrap overflow-hidden pl-8">
              Configurações
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
