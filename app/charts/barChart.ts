import * as d3 from "d3";

type Phrase = {
	word: string;
	count: number;
};

const axisColor = "#475569";
const barColor = "#2563eb";
const barBorderColor = "#eff6ff";
const hoverColor = "#84cc16";
const staticColor = "#4338ca";

export function drawBarChart(chartRef: React.MutableRefObject<HTMLDivElement | null>, phrases: Phrase[]) {
	if (!chartRef.current || !phrases || phrases.length === 0) {
		return;
	}

	d3.select(chartRef.current).selectAll("*").remove();
	const margin = { top: 20, right: 0, bottom: 30, left: 40 };
	const width = d3.select(chartRef.current).node()?.clientWidth || 640;
	const height = d3.select(chartRef.current).node()?.clientHeight || 400;

	const svg = d3
		.select(chartRef.current)
		.append("svg")
		.attr("viewBox", [0, 0, width, height])
		.attr("style", `max-width: ${width}px; height: auto; font: 10px sans-serif; overflow: visible;`);

	const tooltip = d3
		.select(chartRef.current)
		.append("div")
		.attr("class", "d3-tooltip")
		.style("position", "absolute")
		.style("z-index", "10")
		.style("visibility", "hidden")
		.style("padding", "10px")
		.style("background", "rgba(0,0,0,0.6)")
		.style("border-radius", "4px")
		.style("color", "#fff")
		.text("a simple tooltip");

	const words = phrases.map(({ word }) => word);

	const x = d3
		.scaleBand()
		.domain(words)
		.range([margin.left, width - margin.right])
		.padding(0.1);

	const xAxis = d3.axisBottom(x).tickSizeOuter(0);

	const y = d3
		.scaleLinear()
		.domain([0, d3.max(phrases, (d) => d.count) || 0])
		.nice()
		.range([height - margin.bottom, margin.top]);

	svg
		.selectAll("rect.word")
		.data(words)
		.enter()
		.append("rect")
		.attr("class", "word")
		.attr("x", (word) => x(word) || "")
		.attr("y", 0)
		.attr("width", x.bandwidth())
		.attr("height", height - margin.bottom)
		.attr("fill", barBorderColor);

	svg
		.selectAll("rect.count")
		.data(phrases)
		.enter()
		.append("rect")
		.attr("class", "count")
		.attr("x", (dist) => x(dist.word) || "")
		.attr("width", x.bandwidth())
		.attr("y", (dist) => y(dist.count))
		.attr("height", (dist) => y(0) - y(dist.count))
		.attr("fill", barColor)
		.style("mix-blend-mode", "multiply")
		.style("cursor", "pointer")
		.on("mouseover", function (event, data) {
			tooltip
				.html(
					`<div><h4 class="text-lg text-cyan-50 font-bold capitalize">"${data.word}"</h4><span>${data.count} occurrences</span></div>`
				)
				.style("visibility", "visible");
			d3.select(this).transition().attr("fill", hoverColor);
		})
		.on("mousemove", function (event) {
			tooltip.style("top", event.pageY - 10 + "px").style("left", event.pageX + 10 + "px");
		})
		.on("mouseout", function () {
			tooltip.html(``).style("visibility", "hidden");
			d3.select(this).transition().attr("fill", staticColor);
		});

	svg
		.append("g")
		.attr("class", "x-axis")
		.attr("fill", axisColor)
		.attr("transform", `translate(0,${height - margin.bottom})`)
		.style("font-size", "0.8rem")
		.style("font-weight", "bold")
		.style("color", axisColor)
		.call(xAxis)
		.selectAll("text")
		.attr("y", 0)
		.attr("x", 9)
		.attr("dy", ".35em")
		.attr("transform", "rotate(90)")
		.style("text-anchor", "start");

	// Create y-axis
	const yAxisTicks = y.ticks().filter((tick) => Number.isInteger(tick));
	const yAxis = d3.axisLeft(y).tickValues(yAxisTicks).tickFormat(d3.format("d"));
	svg
		.append("g")
		.attr("transform", `translate(${margin.left},0)`)
		.attr("fill", axisColor)
		.style("font-size", "0.8rem")
		.style("font-weight", "bold")
		.style("color", axisColor)
		.call(yAxis)
		.call((g) => g.select(".domain").remove())
		.call((g) =>
			g
				.append("text")
				.attr("x", -margin.left)
				.attr("y", 10)
				.attr("fill", axisColor)
				.attr("text-anchor", "start")
				.text("↑ # of occurrences")
				.style("font-weight", "300")
				.style("color", axisColor)
		);
}
