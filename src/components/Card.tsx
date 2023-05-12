import Link from 'next/link';
import React from 'react';

interface CardProps {
    link: string;
    title: string;
    features: Array<string>;
}

const Card = ({ link, title, features }: CardProps) => {
    return (
        <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={link}
        >
            <h3 className="text-2xl font-bold">{title} →</h3>
            <div className="pl-8 text-lg">
                {features && (
                    <ul className="list-outside list-disc">
                        {features.map((f) => {
                            return <li key={f}>{f}</li>;
                        })}
                    </ul>
                )}
            </div>
        </Link>
    );
};

export default Card;
