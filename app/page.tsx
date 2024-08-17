"use client";
import { RootLayout, Content, Sidebar } from "./components/AppLayout";
import { useRef } from "react";
import { PhraseBox } from "./components/PhraseBox";
import { Navigation } from "./components/Navigation";

export default function Home() {
	const contentContainerRef = useRef<HTMLDivElement>(null);

	const resetScroll = () => {
		contentContainerRef.current?.scrollTo(0, 0);
	};

	return (
		<>
			<Navigation className='p-2 border-b border-b-slate-800 bg-slate-600' />
			<RootLayout>
				<Sidebar className='p-2 border-r border-r-slate-800 bg-slate-600'></Sidebar>
				<Content ref={contentContainerRef} className='bg-slate-50'>
					<PhraseBox />
				</Content>
			</RootLayout>
		</>
	);
}
