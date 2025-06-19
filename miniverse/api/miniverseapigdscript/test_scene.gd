# test_scene.gd
extends Node2D

var miniverseAPIScript = preload("res://addons/miniverse_api_gdscript/MiniverseAPIGDScript.gd")
@onready var miniverse_api_instance
@onready var username_label := $UsernameLabel
@onready var level_label := $LevelLabel
@onready var xp_label := $XPLabel
@onready var ps_label := $PreviousScoreLabel

func _ready():
	miniverse_api_instance = miniverseAPIScript.new()
	add_child(miniverse_api_instance)
	miniverse_api_instance.init_data_received.connect(_update_ui)  # Connexion signal

func _on_user_button_pressed() -> void:
	miniverse_api_instance.send_score(123)

func _update_ui(data):
	username_label.text ="Salut " + miniverse_api_instance.initial_data['username']
	ps_label.text="Previous Score: " + str(miniverse_api_instance.initial_data['previous_score'])
	level_label.text="Level: " + str(miniverse_api_instance.initial_data['saved_data']['level'])
	xp_label.text="XP: " + str(miniverse_api_instance.initial_data['saved_data']['xp'])
	
