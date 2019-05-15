<script>
	import { toPercent, zipWith, getAverage } from './utils.js'

	export let scoreStep=1, name, totals;
	export let scores = Array.from(totals).fill(0);
	export let average;
	$: percentages = zipWith(scores, totals, (a, b) => a / b);
	$: average = getAverage(percentages)
</script>

<h1>{name} - Average: {toPercent(average)}%</h1>
{ #each totals as total, i }
<input type=number step=any bind:value={scores[i]} min=0 max={total} required> / {total} <br>
{ /each }
