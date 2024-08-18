"use client";
import { RootLayout, Content, Sidebar } from "./components/AppLayout";
import { PhraseBox } from "./components/PhraseBox";
import { Navigation } from "./components/Navigation";
import { BarChart } from "./components/BarChart";
import { MdBarChart, MdDesignServices } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Provider } from "jotai";
import { myAtomStore } from "./store";

export default function Home() {
	return (
		<Provider store={myAtomStore}>
			<Navigation className='p-2 border-b border-b-slate-800 bg-slate-600 pr-4'>
				<p className='text-slate-300 text-xs flex items-center justify-center'>Built by Felix Dasgupta</p>
				<ul className='flex gap-2'>
					<li className='text-slate-300 flex items-center justify-center'>
						<a href='https://www.linkedin.com/in/felixdasgupta' target='_blank' rel='noopener noreferrer'>
							<SiLinkedin className='h-4 w-4' />
						</a>
					</li>
					<li className='text-slate-300 flex items-center justify-center'>
						<a href='https://github.com/felixdasgupta/chart_occurrences' target='_blank' rel='noopener noreferrer'>
							<SiGithub className='h-4 w-4' />
						</a>
					</li>
					<li className='text-slate-300 flex items-center justify-center'>
						<a href='https://felixdasgupta.com/' target='_blank' rel='noopener noreferrer'>
							<MdDesignServices className='h-4 w-4' />
						</a>
					</li>
				</ul>
			</Navigation>
			<RootLayout>
				<Sidebar className='border-r border-r-slate-800 bg-slate-600'>
					<ul className='flex flex-col space-y-2'>
						<li className='w-full py-4 px-2 bg-slate-300 text-slate-600 flex items-center justify-start'>
							<MdBarChart className='mr-2 h-5 w-5' />
							<span className=' text-sm font-light'>Occurrences Bar-Chart</span>
						</li>
					</ul>
				</Sidebar>
				<Content className='p-2 bg-slate-50'>
					<PhraseBox />
					<BarChart />
				</Content>
			</RootLayout>
		</Provider>
	);
}
