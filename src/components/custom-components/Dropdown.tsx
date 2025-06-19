'use client';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"

export default function DropdownMenuDemo() {
    const { data: session } = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="py-1.5 px-8 font-medium rounded-3xl bg-gradient-to-r from-cyan-400 to-cyan-700 hover:from-cyan-500 hover:to-cyan-800 text-white text-lg shadow-md shadow-cyan-500/40 hover:bg-blue-500 transition-colors duration-200 cursor-pointer">{session && session.user?.name}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuGroup>
                    <Link href='/profile'>
                        <DropdownMenuItem className="cursor-pointer">
                            Profile
                        </DropdownMenuItem>
                    </Link>
                    <Link href='/dashboard'>
                        <DropdownMenuItem className="cursor-pointer">
                            Dashboard
                        </DropdownMenuItem>
                    </Link>
                    <Link href='/settings'>
                        <DropdownMenuItem className="cursor-pointer">
                            Settings
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onSelect={() => signOut()}
                    className="cursor-pointer"
                >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
