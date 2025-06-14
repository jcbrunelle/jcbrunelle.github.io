extends Node2D

func _ready():
	# Crée un bouton pour tester l'envoi
	var button = Button.new()
	button.text = "Envoyer message"
	button.size = Vector2(200, 50)
	button.position = Vector2(100, 100)
	button.pressed.connect(_send_message_to_rn)
	add_child(button)

func _send_message_to_rn():
	if OS.get_name() == "Web":
		var window = JavaScriptBridge.get_interface("console")
		window.log("Hello from Godot")
