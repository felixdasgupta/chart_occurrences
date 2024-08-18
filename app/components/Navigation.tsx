import Image from "next/image";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Navigation = ({ children, className, ...props }: ComponentProps<"nav">) => {
	return (
		<nav className={twMerge("flex items-center justify-between px-8 py-4 min-h-[60px]", className)} {...props}>
			<div className='flex text-2xl items-center gap-3'>
				<Image src='/d3-black.png' alt='logo' width={32} height={32} />
				<h4 className='font-mono text-sm text-blue-50 font-medium'>Data Visualizations</h4>
			</div>
			<div className='flex items-center space-x-4'>{children}</div>
		</nav>
	);
};
