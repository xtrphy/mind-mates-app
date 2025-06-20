import React from 'react';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Checkboxes() {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id
    const habits = await prisma.habit.findMany({
        where: { userId }
    });

    return (
        <fieldset className='border-1 border-cyan-500 p-6 rounded-lg'>
            <legend className="sr-only">Habits</legend>

            <div className="space-y-2">
                {habits.length > 0 ? habits.map(habit => (
                    <label
                        key={habit.id}
                        htmlFor={habit.id}
                        className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-100 has-[:checked]:bg-blue-100"
                    >
                        <div className="flex items-center">

                            <input
                                id={habit.id}
                                className="size-4 rounded border-gray-300"
                                type="checkbox"
                                defaultChecked={habit.completed}
                            />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900">
                                {habit.title}
                            </strong>

                            <p className="mt-1 text-pretty text-sm text-gray-700">
                                {habit.content}
                            </p>
                        </div>
                    </label>
                )) : (
                    <h3 className='text-center text-lg'>Add your first habit!</h3>
                )}
            </div>
        </fieldset>
    );
};