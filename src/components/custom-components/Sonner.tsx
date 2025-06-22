"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function SonnerDemo() {
    return (
        <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-white hover:text-white"
            variant="outline"
            onClick={() =>
                toast("Record has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                })
            }
        >
            Send message
        </Button>
    )
}
