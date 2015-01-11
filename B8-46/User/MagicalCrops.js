if (FML.isModLoaded("magicalcrops")) {

	NEI.override("magicalcrops:EssenceBricks", [0]);
	NEI.override("magicalcrops:EssenceBlocks", [0]);
	NEI.override("magicalcrops:EssenceGlass", [0]);
	NEI.override("magicalcrops:EssenceLamps", [0]);
	NEI.override("magicalcrops:EssenceCloud", [0]);
	NEI.override("magicalcrops:TintedStoneBrick", [0]);
	NEI.override("magicalcrops:TintedCarvedStoneBrick", [0]);
	NEI.override("magicalcrops:TintedSmallBrick", [0]);
	NEI.override("magicalcrops:TintedWoodPlank", [0]);
	NEI.override("magicalcrops:BlastHardenedClay", [0]);
	NEI.override("magicalcrops:BlastWool", [0]);
	NEI.override("magicalcrops:BlastWoodPlanks", [0]);
	NEI.override("magicalcrops:BlastBricks", [0]);
	NEI.override("magicalcrops:BlastStainedGlass", [0]);
	
	NEI.hide("magicalcrops:magicalcrops_MagicCrop*");
	NEI.hide("magicalcrops:magicalcrops_ElementCrop*");
	NEI.hide("magicalcrops:magicalcrops_ModMagicCrop*");
	NEI.hide("magicalcrops:magicalcrops_SoulCrop*");
	NEI.hide("magicalcrops:magicalcrops_PotionCrop*");

}
