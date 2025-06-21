'use server';

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function getHabits() {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    const habits = await prisma.habit.findMany({
        where: { userId },
        orderBy: {
            completed: 'desc',
        }
    });

    return habits;
}

export async function createHabit(formData: FormData) {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!title || !content || !userId) return;

    await prisma.habit.create({
        data: {
            title,
            content,
            user: {
                connect: { id: userId },
            }
        }
    });
}

export async function deleteHabit(habitId: string) {
    await prisma.habit.delete({
        where: { id: habitId }
    });
}

export async function updateHabitStatus(habitId: string, completed: boolean) {
    await prisma.habit.update({
        where: { id: habitId },
        data: { completed },
    });
}