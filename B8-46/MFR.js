// RC4
if (FML.isModLoaded("MineFactoryReloaded") && MFR_enabled) {

	NEI.override("MineFactoryReloaded:stainedglass.block", [0]);
	NEI.override("MineFactoryReloaded:stainedglass.pane", [0]);
	NEI.override("MineFactoryReloaded:conveyor", [16]);
	NEI.override("MineFactoryReloaded:ceramicdye", [0]);
	
	NEI.hide("MineFactoryReloaded:*.still");

}
