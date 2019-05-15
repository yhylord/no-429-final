<script>
	import Grades from './Grades.svelte';
	import Exams from './Exams.svelte';
	import { toPercent, sum, zipWith } from './utils.js';

	let weights = [.1, .05, .35, .3, .2], grades = Array(5).fill(0);
	let total = 0, extra = false;
	$: total =
		sum(zipWith(grades, weights, (a, b) => a * b))
		+ (extra ? 0.002 : 0);

	function celebrate() {
		alert("we'll get to there in a minute");
	}
</script>

<style>
	.center {
		width: 32px;
		margin: 0 auto;
	}
</style>

<div class="center">
<a href="https://github.com/yhylord/no-429-final">
	<img src="github.svg" alt="github" height=32 weight=32>
</a>
</div>

<Exams totals={[82, 85, 90]} bind:dropped={grades[3]} bind:final={grades[4]}/>
<Grades name={'Homeworks'} totals={Array(11).fill(10)} bind:average={grades[0]}/>
<Grades name={'Labs'} totals={Array(6).fill(100)} bind:average={grades[2]}/>
<Grades name={'Quizzes'} totals={[100, 18, 17, 20, 14]} bind:average={grades[1]}/>

<h1>Have you filled out the CIS and uploaded the screenshot to canvas?</h1>
<input type=checkbox bind:checked={extra}>
{#if extra }
Yes I want that sweet sweet extra credit
{:else}
I'm too smart to beg for one more point
{/if}

<h1>Total: {toPercent(total)}%</h1>
{#if total >= .93 }
<button on:click={celebrate}>Celebrate</button>
{/if}
