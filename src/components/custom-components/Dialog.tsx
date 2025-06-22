import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createHabit } from "@/actions"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { toast } from "sonner"


export default function DialogDemo() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current!);

        try {
            await createHabit(formData);
            toast.success("Habit successfully created!");
            formRef.current?.reset();
            router.refresh();
            setOpen(false);
        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="outline">Add New</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Habit</DialogTitle>
                    <DialogDescription>
                        Describe your new habit and get started today!
                    </DialogDescription>
                </DialogHeader>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="grid gap-4"
                >
                    <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Title of your habit"
                            required
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="content">Content</Label>
                        <Input
                            id="content"
                            name="content"
                            placeholder="Describe your habit"
                            required
                        />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className="cursor-pointer" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button
                            className="cursor-pointer bg-cyan-500 hover:bg-cyan-600"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
