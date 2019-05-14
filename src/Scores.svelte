<script>
	let scores = Array(11).fill(0), totals = Array(11).fill(10);
	$: average =
		scores
		.map((value, index) => value / totals[index])
		.reduce((acc, value) => acc + value) / 11
</script>

<h1>Homeworks - Average: {(average * 100).toFixed(2)}%</h1>
{ #each totals as total, i }
<input type=number bind:value={scores[i]} min=0 max={total}> / {total} <br>
{ /each }
