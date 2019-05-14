<script>
	export let scoreStep=1, name, totals;
	export let scores = Array.from(totals).fill(0);
	export let average;
	$: percentages = 
		scores
		.map((value, index) => value / totals[index])
	$: average = getAverage(percentages)

	function getAverage(scores) {
		return scores.reduce((sum, score) => sum + score) / scores.length;
	}
</script>

<h1>{name} - Average: {(average * 100).toFixed(2)}%</h1>
{ #each totals as total, i }
<input type=number step=any bind:value={scores[i]} min=0 max={total} required> / {total} <br>
{ /each }
