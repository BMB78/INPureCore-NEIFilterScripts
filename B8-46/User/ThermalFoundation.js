if (FML.isModLoaded("ThermalFoundation")) {
	
//	NEI.override("", [0]);
	NEI.override("ThermalFoundation:material", [512, 513, 514, 1024, 1025]);
	
//	NEI.hide("");
	NEI.hide("ThermalFoundation:Ore");
	NEI.hide("ThermalFoundation:Storage");
	NEI.hide("ThermalFoundation:Fluid*");
	
}
