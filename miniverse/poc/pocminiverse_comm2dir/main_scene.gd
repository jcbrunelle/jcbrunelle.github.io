extends Node

var _js_bridge_refs = []

@onready var username_label := $VBoxContainer/UsernameLabel

func _ready():
	send_simple_message()
	# S'assurer que le code est exécuté uniquement dans un environnement web
	if OS.has_feature("web"):
		# Envoi d'un message simple au démarrage pour tester la communication Godot -> RN
		send_simple_message()

		# Configuration du callback pour recevoir les messages de React Native (RN -> Godot)
		# JavaScriptBridge.get_interface("window") permet d'accéder à l'objet window du navigateur/WebView
		var window = JavaScriptBridge.get_interface("window")
		var cb = JavaScriptBridge.create_callback(_on_message_from_react_native)
		_js_bridge_refs.append(cb)
		# onMessageFromRN est la fonction que l'application React Native appellera via injectJavaScript
		window.onMessageFromRN = cb
		print("Godot prêt. Callback pour RN configuré.")

func send_simple_message():
	# Pour envoyer un message de Godot (qui est probablement dans un iframe)
	# vers la WebView React Native (qui est son parent), utilisez window.parent.postMessage.
	# Le '*' signifie que le message peut être envoyé à n'importe quelle origine.
	var js_code = 'window.parent.postMessage("HelloFromGodot", "*");'
	print("JS simple envoyé depuis Godot :", js_code)
	JavaScriptBridge.eval(js_code)
	
func _on_message_from_react_native(args):
	# Cette fonction est appelée par React Native via window.onMessageFromRN
	var json_str = args[0]
	print("Message reçu de React Native (JSON string) :", json_str)
	var result = JSON.parse_string(json_str)
	if result:
		match result["action"]:
			"SET_USERNAME":
				var username = result["payload"].get("username", "Anonyme")
				username_label.text = "Utilisateur : " + username
				print("Username reçu de RN et mis à jour :", username)
	else:
		print("Erreur de parsing JSON du message de RN.")

func _on_score_button_pressed():
	# Appelé lorsque le bouton de score est pressé dans le jeu Godot
	send_to_native("SEND_SCORE", {"score": 12345})

func send_to_native(action: String, payload: Dictionary):
	# Préparez le message sous forme d'objet JSON
	var msg = {"action": action, "payload": payload}
	var json_str = JSON.stringify(msg)
	
	# Envoyez le message JSON stringifié au parent (React Native WebView)
	var js_code = "window.parent.postMessage('" + json_str + "', '*');"
	print("JS final envoyé depuis Godot (score) :", js_code)
	JavaScriptBridge.eval(js_code)
