'use client';

import { useSession, signOut } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession();

    if (!session) return <p>Not logged in</p>

    return (
        <div>
            <p>Welcome {session.user?.name}</p>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    );
};

export default Home;