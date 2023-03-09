<script lang="ts">
	function validate() {
		console.log("I'm the validate() function");
	}
</script>

<div>
	<form on:submit|preventDefault={validate}>
		<label for="name">First Name</label>
		<input type="text" name="name" required aria-required="true" />
		<label for="surname">Last Name</label>
		<input type="text" name="surname" id="surname" required aria-required="true" />
		<label for="email">Email Address</label>
		<input type="email" name="email" id="email" required aria-required="true" />
		<label for="link">Portfolio Link</label>
		<input type="url" name="link" id="link" required aria-required="true" />
		<button type="submit">Submit form</button>
	</form>
</div>

<style>
	form {
		margin: auto;
	}

	label {
		display: inline-block;
		line-height: 1.5;
		vertical-align: middle;
		font-size: var(--base-font-size);
		margin: 20px 0 10px;
	}

	input {
		background-color: white;
		border: 2px solid lightgrey;
		border-radius: 5px 5px 5px 5px;
		width: 100%;
		padding: 1em 1.25em;
	}

	button {
		margin-top: 2em;
		color: white;
		padding: 15px 20px;
		border: 0;
		background: black;
		border-radius: 5px;
		text-transform: capitalize;
		font-weight: 500;
		letter-spacing: 1px;
	}

	@media screen and (max-width: 768px) {
		input {
			width: 90%;
		}
	}
</style>
