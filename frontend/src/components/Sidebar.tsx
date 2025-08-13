import { Button } from "@components/ui/button";
import { Clock, Menu, MessageSquare, Moon, Settings, Sun } from "lucide-react";
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
      <div className="py-4 px-2">
        <div className={cn("flex items-center justify-between w-full")}>
          <div
            className={cn(
              isExpanded
                ? "flex items-center gap-2"
                : "flex items-center justify-center w-full"
            )}
          >
            <Button
              variant="ghost"
              onClick={onMenuClick}
              className={cn(
                "border-none flex items-center justify-center w-12 h-12 rounded-full",
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
            {isExpanded && (
              <Button
                variant="ghost"
                className={cn(
                  "border-none flex items-center justify-center w-12 h-12 rounded-full",
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </Button>
            )}
          </div>
          {isExpanded && (
            <img
              src={"images/icon.png"}
              className="w-[60px] h-[36px] object-contain"
              alt="logo"
            />
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="px-2 flex flex-col gap-2">
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
          {isExpanded && (
            <div className="mt-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-2 px-6">
                <Clock className="h-4 w-4" />
                <span>Recentes</span>
              </div>
              <Button
                variant="ghost"
                className="w-full h-12 border-none flex items-center relative"
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div className="flex-1 text-left whitespace-nowrap overflow-hidden pl-8">
                  Chat com suporte
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <Button
          variant="ghost"
          className="w-full h-12 border-none flex items-center relative"
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
