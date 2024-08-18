import { useAtomValue } from "jotai";
import { chartPhrase } from "../store";
import { useEffect, useRef } from "react";
import { drawBarChart } from "../charts";

export const BarChart = () => {
	const chartData = useAtomValue(chartPhrase);
	const chartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!chartRef.current || !chartData || chartData.length === 0) {
			return;
		}

		drawBarChart(chartRef, chartData);
	}, [chartData, chartRef]);

	if (!chartData || chartData.length === 0) {
		return null;
	}

	return (
		<div className='p-4 w-full flex flex-col items-center justify-center min-h-4'>
			<h1 className='text-black text-lg'>Occurrences of Words in Phrase</h1>
			<div
				id='bar-chart'
				ref={chartRef}
				className='w-4/5 h-full mt-4 flex items-center justify-center min-h-[300px] max-h-[50vh]'
			></div>
		</div>
	);
};
