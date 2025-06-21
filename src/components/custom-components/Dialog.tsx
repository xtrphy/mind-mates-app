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


export default function DialogDemo() {
    const [open, setOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

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
                    action={async (formData) => {
                        await createHabit(formData);
                        formRef.current?.reset();
                        router.refresh();
                        setOpen(false);
                    }}
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
                        <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-600" type="submit">Submit</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
