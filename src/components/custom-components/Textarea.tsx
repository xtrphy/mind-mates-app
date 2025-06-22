'use client';

import { createThought } from "@/actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function TextareaWithButton() {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current!);

        try {
            await createThought(formData);
            toast.success("🧠 Record added successfully");
            formRef.current?.reset();
            router.refresh();
        } catch (error) {
            toast.error("❌ Something went wrong");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-2 border-1 border-cyan-500 p-6 rounded-lg">
            <Textarea
                id="content"
                name="content"
                placeholder="Type your message here."
                required
            />
            <Button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white hover:bg-blue-400 cursor-pointer">
                {isSubmitting ? "Sending..." : "Send message"}
            </Button>
        </form>
    )
}
