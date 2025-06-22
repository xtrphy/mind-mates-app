'use client';

import { useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';
import { deleteHabit, updateHabitStatus } from '@/actions';
import { SmileIcon, Trash, Loader2 } from 'lucide-react';
import { Habit } from '@/generated/prisma';
import DialogDemo from './Dialog';
import { toast } from 'sonner';

export default function Checkboxes({ habits }: { habits: Habit[] }) {
    const router = useRouter();
    const [pendingId, setPendingId] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleCheckboxChange = async (habitId: string, currentValue: boolean) => {
        setPendingId(habitId);

        startTransition(async () => {
            await updateHabitStatus(habitId, !currentValue);
            router.refresh();
        });
    };

    return (
        <fieldset className='border-1 border-cyan-500 p-6 rounded-lg'>
            <legend className="sr-only">Habits</legend>

            <div className="flex flex-col gap-3 space-y-2">
                {habits.length > 0 ? habits.map(habit => {
                    const isLoading = isPending && pendingId === habit.id;

                    return (
                        <div key={habit.id} className='w-1/1 flex flex-col gap-2'>
                            <label
                                htmlFor={habit.id}
                                className="flex items-center cursor-pointer gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-100 has-[:checked]:bg-blue-100"
                            >
                                <div className="flex items-center">
                                    <input
                                        id={habit.id}
                                        className="size-4 rounded border-gray-300"
                                        type="checkbox"
                                        checked={habit.completed}
                                        disabled={isLoading}
                                        onChange={async () => {
                                            try {
                                                await handleCheckboxChange(habit.id, habit.completed);
                                                toast.success(
                                                    habit.completed ? "Habit marked as incomplete" : "✅ Habit completed!"
                                                );
                                            } catch (error) {
                                                toast.error("Something went wrong");
                                                console.error(error)
                                            }
                                        }}
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

                                <div className='ml-auto flex items-center gap-2'>
                                    {isLoading && <Loader2 className='animate-spin w-6 h-6 text-cyan-500' />}
                                    <button
                                        disabled={isLoading}
                                        className='ml-auto cursor-pointer transition-colors duration-100 hover:bg-gray-300 hover:text-red-500 p-2 rounded-lg'
                                        onClick={async () => {
                                            try {
                                                await deleteHabit(habit.id)
                                                toast.success("Habit successfully deleted!");
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
                            </label>
                        </div>
                    );
                }) : (
                    <div className='flex flex-col gap-3 items-center'>
                        <h2 className='text-lg text-center'>Add your first habit!</h2>
                        <SmileIcon size={40} strokeWidth={1.5} color='#35a8cc' />
                    </div>
                )}
                <DialogDemo />
            </div>
        </fieldset>
    );
};