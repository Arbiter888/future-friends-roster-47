import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

interface BackgroundSelectorProps {
  onSelect: (background: string) => void;
}

export const BackgroundSelector = ({ onSelect }: BackgroundSelectorProps) => {
  const backgrounds = [
    {
      name: "Church Interior",
      url: "/lovable-uploads/e5022c69-9adb-495b-bb18-b9710c0567c6.png",
    },
    {
      name: "Futuristic Park",
      url: "/lovable-uploads/849ab32f-d325-40ba-bf3e-5e55edce5f7c.png",
    },
    {
      name: "City Bridge",
      url: "/lovable-uploads/99d080ba-0e2a-4a82-9a69-dc9eb998c110.png",
    },
  ];

  useEffect(() => {
    // Set default background on component mount
    onSelect(backgrounds[0].url);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full sm:w-auto bg-gradient-to-r from-[#1EAEDB] to-[#0FA0CE] text-white hover:opacity-90 border-0"
        >
          <Image className="w-4 h-4 mr-2" />
          Change Background
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[280px] sm:w-56 bg-gradient-to-b from-[#F1F0FB] to-[#E5DEFF] backdrop-blur-sm border-0"
      >
        {backgrounds.map((bg) => (
          <DropdownMenuItem
            key={bg.url}
            onClick={() => onSelect(bg.url)}
            className="cursor-pointer hover:bg-white/20 transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${bg.url})` }}
              />
              {bg.name}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};