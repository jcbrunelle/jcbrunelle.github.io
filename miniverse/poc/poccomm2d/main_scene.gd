extends Node2D

func _on_button_pressed() -> void:
	var window = JavaScriptBridge.get_interface("console")
	if window:
		window.log("Hello from Godot")
	else:
		print("pas de window")
