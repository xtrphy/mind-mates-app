import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithButton() {
    return (
        <div className="grid gap-2 border-1 border-cyan-500 p-6 rounded-lg">
            <Textarea placeholder="Type your message here." />
            <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer">Send message</Button>
        </div>
    )
}
