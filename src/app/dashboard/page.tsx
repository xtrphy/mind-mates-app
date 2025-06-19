'use client';

import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Hello {session?.user?.name}</h1>
        </div>
    );
};

export default Dashboard;