extends Node

var _js_bridge_refs = []

@onready var username_label := $VBoxContainer/UsernameLabel

func _ready():
	if OS.has_feature("web"):
		var window = JavaScriptBridge.get_interface("window")
		var cb = JavaScriptBridge.create_callback(_on_message_from_react_native)
		_js_bridge_refs.append(cb)
		window.onMessageFromRN = cb

func _on_message_from_react_native(args):
	var json_str = args[0]
	var result = JSON.parse_string(json_str)
	if result:
		match result["action"]:
			"SET_USERNAME":
				var username = result["payload"].get("username", "Anonyme")
				username_label.text = "Utilisateur : " + username

func _on_score_button_pressed():
	send_to_native("SEND_SCORE", {"score": 12345})

func send_to_native(action: String, payload: Dictionary):
#	var msg = {"action": action, "payload": payload}
#	var json_str = JSON.stringify(msg).replace('"', '\\"')  # Échappe les guillemets
#	var js_code = 'window.ReactNativeWebView.postMessage("' + json_str + '");'
	var js_code = 'window.ReactNativeWebView.postMessage({"action": SEND_SCORE, "payload":{"score":12345}})';
	print("JS final envoyé :", js_code)
	JavaScriptBridge.eval(js_code)
