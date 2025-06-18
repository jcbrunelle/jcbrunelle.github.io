# test_scene.gd
extends Node2D

var miniverseAPIScript = preload("res://addons/miniverse_api_gdscript/MiniverseAPIGDScript.gd")
@onready var miniverse_api_instance = miniverseAPIScript.new()

func _ready():
	add_child(miniverse_api_instance)
	print(miniverse_api_instance.initial_data)


func _on_user_button_pressed() -> void:
	print(miniverse_api_instance.get_initial_data())
