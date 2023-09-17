/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comproy/ejercicio_sap_ui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
