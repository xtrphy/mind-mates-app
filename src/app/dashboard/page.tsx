'use client';

import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Button from '@/components/custom-components/Button';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['700', '600', '500', '400'],
    variable: '--font-playfair'
});

type Quote = {
    quote: string;
    author: string;
}

const Dashboard = () => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        try {
            setQuote(null);
            setLoading(true);
            const apiKey = process.env.NEXT_PUBLIC_QUOTES_API_KEY;
            if (!apiKey) throw new Error('Missing API Key');

            const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
                headers: {
                    "X-Api-Key": apiKey,
                },
            });

            const data = await res.json();
            setQuote(data[0]);
        } catch (err) {
            console.error("Error fetching quote", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote()
    }, []);

    return (
        <div className='mt-10 p-12 text-white bg-gradient-to-r from-[#4ED6DA] to-[#0face1] rounded-xl shadow-md max-w-4xl mx-auto'>
            {loading ? (
                <div className='space-y-4'>
                    <Skeleton className='h-16' />
                    <Skeleton className='h-8 w-1/2 mx-auto' />
                </div>
            ) : quote ? (
                <div className={`flex flex-col gap-5 items-center ${playfair.className} font-medium text-center`}>
                    <p className='text-3xl leading-11 w-3xl'>{quote.quote}</p>
                    <hr className='border-1 border-white w-sm' />
                    <p className='text-xl'>- {quote.author}</p>
                    <Button text={'New Quote'} onClick={fetchQuote} className='mt-8' />
                </div>
            ) : (
                <h2>Something went wrong :/</h2>
            )}
        </div>
    );
};

export default Dashboard;