import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
    title: string;
}

const Container = ({children, title} : ContainerProps) => {
    const { firstHalf, secondHalf, multiword } = createTitle(title);    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
                    {firstHalf}{multiword && " "}<span className="text-[hsl(280,100%,70%)]">{secondHalf}</span>        
                </h1>
                {children}
            </div>
        </main>
    )
}

const createTitle = (title: string): { firstHalf: string, secondHalf: string, multiword: boolean } => {
    const parts = title.split(" ");

    if (parts.length === 1) {
        const half = Math.floor(title.length / 2);
        const firstHalf = title.substring(0, half);
        const secondHalf = title.substring(half, title.length);
        
        return {
            firstHalf, secondHalf, multiword: false
        };
    } else if (parts.length === 2) {
        return {
            firstHalf: parts[0] as string,
            secondHalf: parts[1] as string,
            multiword: true
        }
    } else if (parts.length % 2 === 0) {
        const firstHalfLength = parts.slice(0, parts.length / 2).join(" ").length;
        const firstHalf = title.substring(0, firstHalfLength);
        const secondHalf = title.substring(firstHalfLength, title.length);
        
        return {
            firstHalf, secondHalf, multiword: true
        }; 
    } else { 
        const half = Math.floor(parts.length / 2);
        const firstHalfLen = parts.slice(0, half).join(' ').length;
        const firstHalf = title.substring(0, firstHalfLen);
        const secondHalf = title.substring(firstHalfLen, title.length);
        
        return {
            firstHalf, secondHalf, multiword: false
        };
    }
}


export default Container