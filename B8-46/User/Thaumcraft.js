if (FML.isModLoaded("Thaumcraft")) {

//	NEI.override("", [0]);
	NEI.override("Thaumcraft:blockCandle", [0]);
	NEI.override("Thaumcraft:ItemEssence", [0]);
	
//	NEI.hide("");
	NEI.hide("Thaumcraft:blockCustomOre");
	NEI.hide("Thaumcraft:ItemNugget");
	NEI.hide("Thaumcraft:ItemSpawnerEgg");
	NEI.hide("Thaumcraft:ItemWispEssence");

}
