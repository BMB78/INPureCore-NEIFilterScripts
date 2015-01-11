function Hide_Custom(domain) {
NEI.override(domain, [0]);
NEI.hide(domain);
}

if (FML.isModLoaded("TConstruct") && Tcon_enabled) {

//	NEI.override("TConstruct:WoolSlab1", [0]);
//	NEI.override("TConstruct:WoolSlab2", [0]);
	NEI.override("TConstruct:ToolStationBlock", [0, 1, 5, 10]);
	NEI.override("TConstruct:ToolForgeBlock", [0]);
	NEI.override("TConstruct:GlassBlock.StainedClear", [0]);
	NEI.override("TConstruct:GlassPaneClearStained", [0]);
	
	NEI.hide("TConstruct:buckets");
	NEI.hide("TConstruct:potionLauncher");
	NEI.hide("TConstruct:titleIcon");
	
//	NEI.hide("TConstruct:*slab*");
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
	
	// Tools
	Hide_Custom("TConstruct:pickaxe");
	Hide_Custom("TConstruct:shovel");
	Hide_Custom("TConstruct:hatchet");
	Hide_Custom("TConstruct:broadsword");
	Hide_Custom("TConstruct:longsword");
	Hide_Custom("TConstruct:rapier");
	Hide_Custom("TConstruct:dagger");
	Hide_Custom("TConstruct:cutlass");
	Hide_Custom("TConstruct:frypan");
	Hide_Custom("TConstruct:battlesign");
	Hide_Custom("TConstruct:mattock");
	Hide_Custom("TConstruct:chisel");
	Hide_Custom("TConstruct:lumberaxe");
	Hide_Custom("TConstruct:cleaver");
	Hide_Custom("TConstruct:scythe");
	Hide_Custom("TConstruct:excavator");
	Hide_Custom("TConstruct:hammer");
	Hide_Custom("TConstruct:battleaxe");
	Hide_Custom("TConstruct:shortbow");
	Hide_Custom("TConstruct:arrow");
	
	Hide_Custom("TConstruct:creativeModifier");

}
