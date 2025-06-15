'use client';

import { useSession, signOut } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession();

    if (!session) return <p>Not logged in</p>

    return (
        <div className="p-10 flex flex-col items-center gap-4">
            <p>Welcome {session.user?.name}</p>
            <button className="py-2 px-4 bg-cyan-200 rounded-lg hover:bg-cyan-400 duration-200 transition-colors cursor-pointer" onClick={() => signOut()}>Logout</button>
        </div>
    );
};

export default Home;