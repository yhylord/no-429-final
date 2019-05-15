<script>
	import { toPercent, getAverage, zipWith } from './utils.js';

	export let totals, dropped, final;
	let scores = Array.from(totals).fill(0);
	$: percentages = zipWith(scores, totals, (a, b) => a / b);
	$: droppedPercentages = percentages.sort().slice(1);
	
	$: final = toPercent(getAverage(percentages));
	$: dropped = toPercent(getAverage(droppedPercentages));
</script>

<h1>Exams - Dropped average: {dropped}%</h1>
{ #each totals as total, i }
<input type=number bind:value={scores[i]} min=0 max={total} required> / {total} <br>
{ /each }

<h1>Final - {final}%</h1>
<input type=number step=0.01 bind:value={final} min=0 max=100 required> / 100
