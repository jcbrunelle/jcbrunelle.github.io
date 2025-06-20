extends Node2D

var console
var window

var _js_bridge_refs = []
@onready var username_label := $UsernameLabel

func _ready():
	console = JavaScriptBridge.get_interface("console")
	window = JavaScriptBridge.get_interface("window")
	
	var cb = JavaScriptBridge.create_callback(_on_message_from_react_native)
	_js_bridge_refs.append(cb)
	window.onMessageFromRN = cb
	send_message_to_react_native("READY",{})

func _on_button_pressed() -> void:
	send_message_to_react_native("GAME_OVER",{"score":23})

func send_message_to_react_native(action, payload) -> void:
	var message = JSON.stringify({"action":action,"payload":payload})
	window.test(message);
	
func _on_message_from_react_native(args):
	var json_str = args[0]
	var result = JSON.parse_string(json_str)
	if result:
		match result["action"]:
			"SET_USERNAME":
				var username = result["payload"].get("username", "Anonyme")
				username_label.text = "Bonjour, " + username
