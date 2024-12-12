import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HomeBackgroundSelectorProps {
  onSelect: (background: string) => void;
}

export const HomeBackgroundSelector = ({ onSelect }: HomeBackgroundSelectorProps) => {
  const backgrounds = [
    {
      name: "Futuristic Park",
      url: "/lovable-uploads/849ab32f-d325-40ba-bf3e-5e55edce5f7c.png",
    },
    {
      name: "City Bridge",
      url: "/lovable-uploads/99d080ba-0e2a-4a82-9a69-dc9eb998c110.png",
    },
    {
      name: "Neon Bar",
      url: "/lovable-uploads/2176061c-7f6f-4c32-a6c9-ecc4507c172b.png",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/80 hover:bg-white/90 transition-colors"
        >
          <Image className="w-4 h-4 mr-2" />
          Change Background
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[280px] bg-white/90 backdrop-blur-sm"
      >
        {backgrounds.map((bg) => (
          <DropdownMenuItem
            key={bg.url}
            onClick={() => onSelect(bg.url)}
            className="cursor-pointer hover:bg-black/5 transition-colors duration-200"
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