<script>
	function send_message(message) {
		console.log("script api actif");
		window.ReactNativeWebView.postMessage(message);
	}
</script>
