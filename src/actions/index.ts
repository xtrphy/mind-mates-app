'use server';

import { prisma } from "@/lib/prisma";

export async function createHabit(formData: FormData) {
    // Получить userId из session next auth + добавить в session айди пользователя, если залогинился через Google
}