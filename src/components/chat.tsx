"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Scale } from "lucide-react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Chat({ img }: { img: string }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const MAX_MESSAGES = 6;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    const newMessage: Message = { role: "user", content: message };

    try {
      const recentMessages = messages.slice(-MAX_MESSAGES);
      const updatedMessages = [...recentMessages, newMessage];
      setMessages(updatedMessages);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, data.message]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="w-full shadow-lg overflow-hidden flex flex-col flex-1 rounded-md">
      <CardHeader className="border-b bg-card">
        <CardTitle className="flex items-center gap-2">
          <Avatar className="h-8 w-8 flex items-center justify-center bg-muted">
            <Scale />
          </Avatar>
          <span>Abogado Virtual</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 min-h-0">
        <ScrollArea className="h-full p-4">
          <div className="space-y-4 pt-4">
            {messages.map(
              (msg, index) =>
                msg.role !== "system" && (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <Scale />
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "user" && (
                      <Avatar className="h-8 w-8 ml-2">
                        <Image
                          src={img}
                          width={100}
                          height={100}
                          alt="You"
                          className="object-cover"
                        />
                      </Avatar>
                    )}
                  </div>
                )
            )}
            {isLoading && (
              <div className="flex justify-start">
                <Avatar className="h-8 w-8 mr-2">
                  <Scale />
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-2 flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span>Pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4 bg-card">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
