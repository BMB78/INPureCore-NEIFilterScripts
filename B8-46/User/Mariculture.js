if (FML.isModLoaded("Mariculture")) {
	
//	NEI.override("", [0]);
	NEI.override("Mariculture:pearl_block", [0]);
	NEI.override("Mariculture:pearl_brick", [0]);
	NEI.override("Mariculture:lamps_on", [0]);
	NEI.override("Mariculture:plant_growable", [0]);
	NEI.override("Mariculture:plant_static", [0]);
	NEI.override("Mariculture:ring", [0]);
	NEI.override("Mariculture:bracelet", [0]);
	NEI.override("Mariculture:necklace", [0]);
	
//	NEI.hide("");
	NEI.hide("Mariculture:titanium_*");
	
}
