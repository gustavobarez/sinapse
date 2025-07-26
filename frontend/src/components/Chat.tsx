import { FaPaperclip } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { TextArea } from "./TextArea";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

export function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  return (
    <div className="w-full border rounded-2xl shadow overflow-hidden bg-white dark:bg-gray-800">
      <TextArea
        value={value}
        onChange={onChange}
        className="resize-none w-full border-none rounded-t-2xl p-3 text-base min-h-[10px] max-h-[152px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 bg-transparent outline-none textarea-focus-top"
        placeholder="Digite sua mensagem..."
      />
      <div className="w-full flex justify-between items-center px-4 py-2 rounded-b-2xl bg-white dark:bg-gray-800">
        <button>
          <FaPaperclip />
        </button>
        <button onClick={onSend}>
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
}
