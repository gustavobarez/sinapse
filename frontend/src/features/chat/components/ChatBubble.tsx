import { Card } from "@components/ui/card";

export function ChatBubble({
  message,
  sender,
}: {
  message: string;
  sender: "user" | "system";
}) {
  return (
    <Card
      className={`mb-2 max-w[70%] ${
        sender === "user"
          ? "self-end bg-primary text-primary-foreground"
          : "self-start bg-muted text-muted-foreground"
      }`}
    >
      <div
        className="p-3"
        dangerouslySetInnerHTML={{
          __html: message
            .replace(/\n/g, "<br />")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>"),
        }}
      />
    </Card>
  );
}
