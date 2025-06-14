extends Node2D

func _send_message_to_rn():
	var window = JavaScriptBridge.get_interface("console")
	if window:
		window.log("Hello from Godot")
	else:
		print("pas de window")
