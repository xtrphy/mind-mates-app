import Quote from "@/components/custom-components/Quote";
import TextareaWithButton from "@/components/custom-components/Textarea";
import Checkboxes from "@/components/custom-components/Checkboxes";
import { getHabits, getThoughts } from "@/actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session?.user.id) {
        throw new Error('User is not authenticated');
    }

    const habits = await getHabits();
    const thoughts = await getThoughts();

    return (
        <div className="flex flex-col gap-10 items-center mx-auto w-[864px] mb-10">
            <Quote />
            <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl text-center font-semibold">Your habits</h1>
                    <Checkboxes habits={habits} />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl text-center font-semibold">Write your thoughts</h1>
                    <TextareaWithButton thoughts={thoughts} />
                </div>
            </div>
        </div>
    );
};