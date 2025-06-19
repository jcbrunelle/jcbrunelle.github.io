# MiniverseAPIGDScript.gd
extends Node

var window
var console
var _js_bridge_refs = []
var initial_data : Dictionary = {} 	# { username:[username],
									#  previous_score:[previous_score],
				 					#  saved_data:[saved_data] }
# Ready function
# Initializating the callback and send a READY message to RN App
func _ready():
	console = JavaScriptBridge.get_interface("console")
	window = JavaScriptBridge.get_interface("window")
	
	var cb = JavaScriptBridge.create_callback(_on_message_from_react_native)
	_js_bridge_refs.append(cb)
	window.onMessageFromRN = cb
	_send_message_to_react_native("READY",{})

# Received messages function.
# Received messages are formatted as followed :
# { "action" : [action_name], "payload" : [payload_data] }
# Initial data is formatted as followed :
# { "action" : "SET_INITDATA", "payload" : {username:[username],
#											previous_score:[previous_score],
#											saved_data:[saved_data]
#											}
# }
func _on_message_from_react_native(args):
	_send_message_to_react_native("MSGRECU",args[0])
	var json_str = args[0]
	var result = JSON.parse_string(json_str)
	if result:
		match result["action"]:
			"SET_INITDATA":
				initial_data=result["payload"]

# Send messages function.
# Sent messages must be formatted as followed :
# { "action" : [action_name], "payload" : [payload_data] }
func _send_message_to_react_native(action, payload) -> void:
	var message = JSON.stringify({"action":action,"payload":payload})
	window.send_message(message)

# Send achievement function.
# The name must match with the achievements given in the initial import.
func send_achievement(achievement_name) -> void:
	_send_message_to_react_native("ACHIEVEMENT",achievement_name)

# Send score function.
# The score must be a number.
func send_score(score) -> void:
	_send_message_to_react_native("SCORE",{"score":score})

# Send saved data function.
# The saved data format is up to the game developer. 
func send_saved_data(saved_data) -> void:
	_send_message_to_react_native("SAVED_DATA",saved_data)

func get_initial_data():
	return initial_data
