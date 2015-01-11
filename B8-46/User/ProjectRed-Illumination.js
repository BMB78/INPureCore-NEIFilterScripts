if (FML.isModLoaded("ProjRed|Illumination")) {

	NEI.hide("ProjRed|Illumination:projectred.illumination.airousLight");
	
	NEI.override("ProjRed|Illumination:projectred.illumination.lamp", [0, 16]);
	NEI.override("ProjRed|Illumination:projectred.illumination.lantern", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.lantern.inv", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.fixture", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.fixture.inv", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.cagelamp", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.cagelamp.inv", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.cagelamp2", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.cagelamp2.inv", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.lightbutton", [0]);
	NEI.override("ProjRed|Illumination:projectred.illumination.flightbutton", [0]);
//	NEI.override("", [0]);
	

}
