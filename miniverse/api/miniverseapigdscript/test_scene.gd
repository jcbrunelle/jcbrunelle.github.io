# test_scene.gd
extends Node2D

var miniverseAPIScript = preload("res://addons/miniverse_api_gdscript/MiniverseAPIGDScript.gd")
@onready var miniverse_api_instance
@onready var username_label := $UsernameLabel
@onready var label1 := $Label1
@onready var label2 := $Label2

func _ready():
	miniverse_api_instance = miniverseAPIScript.new()
	add_child(miniverse_api_instance)
	label1.text = miniverse_api_instance
	label2.text = miniverse_api_instance.initial_data
	username_label.text = miniverse_api_instance.initial_data['username']

func _on_user_button_pressed() -> void:
	miniverse_api_instance.send_score(123)
