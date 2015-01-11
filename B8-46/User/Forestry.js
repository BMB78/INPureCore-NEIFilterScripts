function Hide_Custom(domain) {
NEI.override(domain, [0]);
NEI.hide(domain);
}

if (FML.isModLoaded("Forestry")) {
	
	NEI.override("Forestry:ffarm", [0, 2, 3, 4, 5]);
	
	NEI.hide("Forestry:resources");
	NEI.hide("Forestry:stained");
	NEI.hide("Forestry:beehives");
	NEI.hide("Forestry:candle");
	NEI.hide("Forestry:stump");
	NEI.hide("Forestry:log*");
	NEI.hide("Forestry:fireproofLog*");
	NEI.hide("Forestry:planks*");
	NEI.hide("Forestry:fireproofPlanks*");
	NEI.hide("Forestry:slabs*");
	NEI.hide("Forestry:fences*");
	NEI.hide("Forestry:stairs");
	NEI.hide("Forestry:saplingGE");
	NEI.hide("Forestry:leaves");
	NEI.hide("Forestry:ingot*");
	NEI.hide("Forestry:*Pickaxe");
	NEI.hide("Forestry:*Shovel");
	NEI.hide("Forestry:waxCapsule*");
	NEI.hide("Forestry:*Can");
	NEI.hide("Forestry:can*");
	NEI.hide("Forestry:refractory*");
	NEI.hide("Forestry:beeCombs");
	NEI.hide("Forestry:crated*");
	NEI.hide("Forestry:stamps");
	
	Hide_Custom("Forestry:beeQueenGE");
	Hide_Custom("Forestry:beeDroneGE");
	Hide_Custom("Forestry:beePrincessGE");
	Hide_Custom("Forestry:beeLarvaeGE");
	Hide_Custom("Forestry:sapling");
	Hide_Custom("Forestry:pollenFertile");
	Hide_Custom("Forestry:butterflyGE");
	Hide_Custom("Forestry:serumGE");
	Hide_Custom("Forestry:caterpillarGE");
//	NEI.hide("");
	
}
