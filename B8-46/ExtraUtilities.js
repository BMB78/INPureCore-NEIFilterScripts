// Microblocks always require special handling.
if (FML.isModLoaded("ExtraUtilities") && ExtraUtilities_enabled) {

	NEI.override("ExtraUtilities:drum", [0, 1]);
//	NEI.override("ExtraUtilities:colorStoneBrick", [0]);
//	NEI.override("ExtraUtilities:colorWoodPlanks", [0]);
//	NEI.override("ExtraUtilities:color_*", [0]);
//	NEI.override("ExtraUtilities:greenscreen", [0]);
	
	if (FML.isModLoaded("ForgeMicroblock")) {
		// Special handler for cleanly removing them.
		ExtraUtilities.obliterate_microblocks([1, 2, 3], ForgeMicroblock.getRandomMaterial());
    }
}
