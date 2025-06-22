'use client';

import { createThought, deleteThought } from "@/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Record } from "@/generated/prisma";
import { SparkleIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation"
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function TextareaWithButton({ thoughts }: { thoughts: Record[] }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current!);

        try {
            await createThought(formData);
            toast.success("🧠 Record added successfully! You can check it in 'Thoughts' section.");
            formRef.current?.reset();
            router.refresh();
        } catch (error) {
            toast.error("❌ Something went wrong");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Format time

    return (
        <div className="flex flex-col gap-3">
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
            <div className="border-1 border-cyan-500 p-6 rounded-lg">
                {thoughts.length > 0 ? thoughts.map(thought => (
                    <div key={thought.id} className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-extrabold text-lg">{thought.title}</h3>
                            <p>{thought.content}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm text-gray-400">
                                {new Date(thought.createdAt).toLocaleString('en-EN', {
                                    day: 'numeric',
                                    month: 'long',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </p>
                            <button
                                className='ml-auto cursor-pointer transition-colors duration-100 hover:bg-gray-300 hover:text-red-500 p-2 rounded-lg'
                                onClick={async () => {
                                    try {
                                        await deleteThought(thought.id)
                                        toast.success("Thought successfully deleted!");
                                        router.refresh();
                                    } catch (error) {
                                        toast.error("Something went wrong");
                                        console.error(error);
                                    }
                                }}
                            >
                                <Trash />
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className='flex flex-col gap-3 items-center'>
                        <h2 className='text-lg text-center'>Add your first thought!</h2>
                        <SparkleIcon size={40} strokeWidth={1.5} color='#35a8cc' />
                    </div>
                )}
            </div>
        </div>
    )
}
