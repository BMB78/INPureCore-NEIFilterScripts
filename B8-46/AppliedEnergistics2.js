if (FML.isModLoaded("appliedenergistics2") && AE2_enabled) {

	NEI.override(AE2.getFacadeItem(), [java.random(AE2.getNumberOfTypes())]);
	
	NEI.override("appliedenergistics2:item.ItemPaintBall", [0, 20]);
	
	NEI.hide("appliedenergistics2:tile.BlockCableBus");
	NEI.hide("appliedenergistics2:tile.BlockMatrixFrame");
	NEI.hide("appliedenergistics2:tile.BlockPaint");

}
