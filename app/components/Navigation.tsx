import Image from "next/image";
import { ComponentProps } from "react";
import { MdAddChart } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const Navigation = ({ children, className, ...props }: ComponentProps<"nav">) => {
	return (
		<nav className={twMerge("flex items-center justify-between px-8 py-4 min-h-[60px]", className)} {...props}>
			<div className='flex text-2xl items-center'>
				<MdAddChart className='mr-2 h-6 w-6 text-blue-50' />
				<h4 className='font-mono text-sm text-blue-50 font-medium'>Visualize Occurrences</h4>
			</div>
			<div className='flex items-center space-x-4'>{children}</div>
		</nav>
	);
};
