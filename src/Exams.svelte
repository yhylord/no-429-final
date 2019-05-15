<script>
	import { toPercent, getAverage, zipWith } from './utils.js';

	export let totals, dropped, final;
	export let scores = Array.from(totals).fill(0);
	$: percentages = zipWith(scores, totals, (a, b) => a / b);
	$: droppedPercentages = percentages.sort().slice(1);
	
	$: average = getAverage(percentages);
	$: dropped = getAverage(droppedPercentages);
	$: finalPercentage = toPercent(average);
	$: final = finalPercentage / 100;
</script>

<h1>Exams - Dropped average: {toPercent(dropped)}%</h1>
{ #each totals as total, i }
<input type=number bind:value={scores[i]} min=0 max={total} required> / {total} <br>
{ /each }

<h1>Final - {finalPercentage}%</h1>
<input type=number step=0.01 bind:value={finalPercentage} min=0 max=100 required> / 100
