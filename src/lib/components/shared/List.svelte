<ul>
	<li>
		<slot />
	</li>
</ul>

<style>
	ul {
		margin: 0 0 0 -2em;
	}

	li {
		list-style: none;
		position: relative;
		padding: 3px 0 2px 25px;
		margin-bottom: 20px;
	}

	li::before {
		content: '';
		position: absolute;
		margin-right: 10px;
		height: 1em;
		width: 1em;
		background: black;
		top: 0.5em;
		left: 0;
		transform: rotate(45deg);
	}
</style>
