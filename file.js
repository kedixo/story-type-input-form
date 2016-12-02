<script>
$("dl.decision-tree dd").addClass("collapsed");
$("dl.decision-tree dt").click(function(event) {
		$(event.target).next().toggleClass("collapsed");
});
</script>
