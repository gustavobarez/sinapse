import { Textarea } from "@components/ui/textarea";

export function TextArea(props: React.ComponentProps<typeof Textarea>) {
    return <Textarea placeholder="Digite seu texto aqui" {...props}></Textarea>;
}