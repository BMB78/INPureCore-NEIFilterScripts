function Hide_Custom(domain) {
NEI.override(domain, [0]);
NEI.hide(domain);
}

if (FML.isModLoaded("TConstruct") && Tcon_enabled) {

	NEI.override("TConstruct:ToolStationBlock", [0, 1, 5, 10]);
	NEI.override("TConstruct:ToolForgeBlock", [0]);
	NEI.override("TConstruct:GlassBlock.StainedClear", [0]);
	NEI.override("TConstruct:GlassPaneClearStained", [0]);
	
	NEI.hide("TConstruct:buckets");
	NEI.hide("TConstruct:potionLauncher");
	NEI.hide("TConstruct:titleIcon");
	
	NEI.hide("TConstruct:*Slab*");
	NEI.hide("TConstruct:fluid.molten.*");
	NEI.hide("TConstruct:*Nether");
	
	// Tool Parts
	NEI.hide("TConstruct:toolRod");
	NEI.hide("TConstruct:toolShard");
	NEI.hide("TConstruct:pickaxeHead");
	NEI.hide("TConstruct:shovelHead");
	NEI.hide("TConstruct:hatchetHead");
	NEI.hide("TConstruct:binding");
	NEI.hide("TConstruct:toughBinding");
	NEI.hide("TConstruct:toughRod");
	NEI.hide("TConstruct:heavyPlate");
	NEI.hide("TConstruct:swordBlade");
	NEI.hide("TConstruct:wideGuard");
	NEI.hide("TConstruct:handGuard");
	NEI.hide("TConstruct:crossbar");
	NEI.hide("TConstruct:knifeBlade");
	NEI.hide("TConstruct:fullGuard");
	NEI.hide("TConstruct:frypanHead");
	NEI.hide("TConstruct:signHead");
	NEI.hide("TConstruct:chiselHead");
	NEI.hide("TConstruct:scytheBlade");
	NEI.hide("TConstruct:broadAxeHead");
	NEI.hide("TConstruct:excavatorHead");
	NEI.hide("TConstruct:largeSwordBlade");
	NEI.hide("TConstruct:hammerHead");
	NEI.hide("TConstruct:bowstring");
	NEI.hide("TConstruct:fletching");
	NEI.hide("TConstruct:arrowhead");
	NEI.hide("TConstruct:ShurikenPart");
	NEI.hide("TConstruct:CrossbowLimbPart");
	NEI.hide("TConstruct:BowLimbPart");
	NEI.hide("TConstruct:CrossbowBodyPart");
	NEI.hide("TConstruct:BoltPart");
//	NEI.hide("");
	
	// Tools
	NEI.hide("TConstruct:pickaxe");
	NEI.hide("TConstruct:shovel");
	NEI.hide("TConstruct:hatchet");
	NEI.hide("TConstruct:broadsword");
	NEI.hide("TConstruct:longsword");
	NEI.hide("TConstruct:rapier");
	NEI.hide("TConstruct:dagger");
	NEI.hide("TConstruct:cutlass");
	NEI.hide("TConstruct:frypan");
	NEI.hide("TConstruct:battlesign");
	NEI.hide("TConstruct:mattock");
	NEI.hide("TConstruct:chisel");
	NEI.hide("TConstruct:lumberaxe");
	NEI.hide("TConstruct:cleaver");
	NEI.hide("TConstruct:scythe");
	NEI.hide("TConstruct:excavator");
	NEI.hide("TConstruct:hammer");
	NEI.hide("TConstruct:battleaxe");
	NEI.hide("TConstruct:shortbow");
	NEI.hide("TConstruct:arrow");
	NEI.hide("TConstruct:BoltAmmo");
	NEI.hide("TConstruct:Crossbow");
	NEI.hide("TConstruct:ThrowingKnife");
	NEI.hide("TConstruct:Shuriken");
	NEI.hide("TConstruct:Javelin");
	NEI.hide("TConstruct:ArrowAmmo");
	NEI.hide("TConstruct:LongBow");
	NEI.hide("TConstruct:ShortBow");
//	NEI.hide("");
	
	NEI.hide("TConstruct:creativeModifier");

}
