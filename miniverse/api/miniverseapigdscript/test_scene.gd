# test_scene.gd
extends Node2D

var miniverseAPIScript = preload("res://addons/miniverse_api_gdscript/MiniverseAPIGDScript.gd")
@onready var miniverse_api_instance
@onready var username_label := $UsernameLabel
@onready var label1 := $LevelLabel
@onready var label2 := $XPLabel
@onready var label3 := $PreviousScoreLabel

func _ready():
	miniverse_api_instance = miniverseAPIScript.new()
	add_child(miniverse_api_instance)
	miniverse_api_instance.init_data_received.connect(_update_ui)  # Connexion signal

func _on_user_button_pressed() -> void:
	miniverse_api_instance.send_score(123)

func _update_ui(data):
	username_label.text = miniverse_api_instance.initial_data['username']
	label1.text="Level: " + miniverse_api_instance.initial_data['saved_data']['level']
	label2.text="XP: " + miniverse_api_instance.initial_data['saved_data']['xp']
	label3.text="Previous Score: " + miniverse_api_instance.initial_data['previous_score']
	
