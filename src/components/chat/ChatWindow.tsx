import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Message } from "@/types/chat";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Image } from "lucide-react";

interface ChatWindowProps {
  messages: Message[];
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  characterImage?: string;
  characterName?: string;
  isLoading?: boolean;
  isGroupChat?: boolean;
}

const backgrounds = [
  { name: "None", value: "none" },
  { name: "Futuristic City", value: "/lovable-uploads/6fd19bc5-2400-4d1d-ac86-b28dca510751.png" },
  { name: "Gradient", value: "gradient" },
];

export const ChatWindow = ({
  messages,
  newMessage,
  setNewMessage,
  handleSendMessage,
  characterImage,
  characterName,
  isLoading,
  isGroupChat
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [background, setBackground] = useState("none");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBackgroundStyle = () => {
    switch (background) {
      case "none":
        return {};
      case "gradient":
        return {
          background: "linear-gradient(to right, #0ea5e9, #2563eb)",
        };
      default:
        return {
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              Change Background
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {backgrounds.map((bg) => (
              <DropdownMenuItem
                key={bg.value}
                onClick={() => setBackground(bg.value)}
              >
                {bg.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Card 
        className="p-6 relative overflow-hidden"
        style={getBackgroundStyle()}
      >
        <div 
          className={`absolute inset-0 ${background !== 'none' ? 'bg-black/30 backdrop-blur-xs' : ''}`}
        />
        <div className="relative z-10">
          <div className="h-[500px] overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                characterImage={isGroupChat ? message.characterImage : characterImage}
                characterName={isGroupChat ? message.characterName : characterName}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <ChatInput
            value={newMessage}
            onChange={setNewMessage}
            onSubmit={handleSendMessage}
            disabled={isLoading}
          />
        </div>
      </Card>
    </div>
  );
};