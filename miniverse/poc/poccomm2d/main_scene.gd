extends Node2D

var console
var window
func _ready():
	console = JavaScriptBridge.get_interface("console")
	window = JavaScriptBridge.get_interface("window")
	console.log("ready")
	
func _on_button_pressed() -> void:
	var message = "Bonjour depuis Godot !"
	#var js_code = "window.parent.postMessage(" + message + ", '*');"
	#JavaScriptBridge.eval(js_code)
	window.test(message);
