<script>
	import { toPercent, zipWith, getAverage } from './utils.js';

	export let name, totals, average;
	let scores = Array.from(totals).fill(0);
	$: percentages = zipWith(scores, totals, (a, b) => a / b);
	$: average = toPercent(getAverage(percentages));
</script>

<h1>{name} - Average: {average}%</h1>
{ #each totals as total, i }
<input type=number bind:value={scores[i]} min=0 max={total} required> / {total} <br>
{ /each }
