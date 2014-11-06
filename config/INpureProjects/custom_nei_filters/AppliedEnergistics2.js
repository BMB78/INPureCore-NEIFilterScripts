if (FML.isModLoaded("appliedenergistics2") && AE2_enabled) {

	NEI.override_item(AE2.getFacadeItem(), [java.random(AE2.getNumberOfTypes())]);
	
	NEI.override("appliedenergistics2:item.ItemMultiPart", [16, 36, 56, 76, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 461, 462, 463, 464, 466, 467, 480]);
	NEI.override("appliedenergistics2:item.ItemPaintBall", [0, 20]);
	
	NEI.hide("appliedenergistics2:tile.BlockCableBus");
	NEI.hide("appliedenergistics2:tile.BlockMatrixFrame");
	NEI.hide("appliedenergistics2:tile.BlockPaint");

}
