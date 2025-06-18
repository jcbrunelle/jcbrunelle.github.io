# test_scene.gd
extends Node2D

var miniverseAPIScript = preload("res://addons/miniverse_api_gdscript/MiniverseAPIGDScript.gd")
@onready var miniverse_api_instance
@onready var username_label := $UsernameLabel
@onready var connexion_label := $ConnexionLabel

func _ready():
	miniverse_api_instance = miniverseAPIScript.new()
	add_child(miniverse_api_instance)
	username_label.text = miniverse_api_instance.initial_data['username']

func _on_user_button_pressed() -> void:
	miniverse_api_instance.send_score(123)
