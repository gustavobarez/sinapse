import { Menu, Gem, ChevronDown } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

export function Navbar() {
  return (
    <div className="flex items-center gap-2 p-5">
      <div className="text-lg font-semibold">Sinapse</div>
    </div>
  );
}
