'use client';

import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from 'react';
import Button from '@/components/custom-components/Button';
import { Skeleton } from '../ui/skeleton';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['700', '600', '500', '400'],
    variable: '--font-playfair'
});

type Quote = {
    quote: string;
    author: string;
}

const Quote = () => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchQuote = async () => {
        try {
            setIsLoading(true);
            setQuote(null);
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
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote()
    }, []);

    return (
        <div className='mt-10 p-12 text-white bg-gradient-to-r from-[#4ED6DA] to-[#0face1] rounded-xl shadow-md max-w-4xl mx-auto'>
            {isLoading ? (
                <div className="flex flex-col gap-5 items-center">
                    <div className="w-full max-w-3xl space-y-4">
                        <Skeleton className="h-9 w-full bg-white/20" />
                        <Skeleton className="h-9 w-11/12 mx-auto bg-white/20" />
                        <Skeleton className="h-9 w-5/6 mx-auto bg-white/20" />
                    </div>

                    <Skeleton className="h-px w-100 bg-white/30" />

                    <Skeleton className="h-7 w-90 bg-white/20" />

                    <div className='mt-8'>
                        <Skeleton className="h-[46px] w-32 bg-white/20 rounded-lg" />
                    </div>
                </div>
            ) : quote ? (
                <div className={`flex flex-col gap-5 items-center ${playfair.className} font-medium text-center`}>
                    <p className='text-3xl leading-11 w-3xl'>{quote.quote}</p>
                    <hr className='border-1 border-white w-sm' />
                    <p className='text-xl'>- {quote.author}</p>
                    <Button text={'New Quote'} onClick={fetchQuote} className='mt-8' />
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl mb-4">Failed to load quote</h2>
                    <Button text={'Try Again'} onClick={fetchQuote} className='' />
                </div>
            )}
        </div>
    );
};

export default Quote;