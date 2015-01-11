function Hide_Custom(domain) {
NEI.override(domain, [0]);
NEI.hide(domain);
}

if (FML.isModLoaded("Thaumcraft")) {

	NEI.override("Thaumcraft:blockCandle", [0]);
	NEI.override("Thaumcraft:ItemEssence", [0]);
	
	NEI.hide("Thaumcraft:ItemSpawnerEgg");
	
	Hide_Custom("Thaumcraft:ItemWispEssence");

}
