<script>
	import '../app.postcss';
</script>

<div class="w-[100vw] h-[100vh]">
	<div class="w-full h-[10vh] flex bg-teal-200 items-center px-10">
		<a href="/" class="border rounded-lg p-1 mr-10"> Home</a>
		<a href="/bar" class="border rounded-lg p-1 mr-10"> Bar chart</a>
		<a href="/pie" class="border rounded-lg p-1"> Pie chart</a>
	</div>
	<div class="h-[90vh] w-full">
		<slot />
	</div>
</div>
