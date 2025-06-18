# test_scene.gd
extends Node2D

var miniverseAPIScript = preload("res://addons/miniverse_api_gdscript/MiniverseAPIGDScript.gd")
@onready var miniverse_api_instance = miniverseAPIScript.new()
@onready var username_label := $UsernameLabel

func _ready():
	add_child(miniverse_api_instance)
	username_label.text = miniverse_api_instance.initial_data['username']


func _on_user_button_pressed() -> void:
	username_label.text = miniverse_api_instance.initial_data['username']
