sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";

	return Opa5.extend("VendorMaster.VendorMaster.test.integration.arrangements.Startup", {

<<<<<<< HEAD
<<<<<<< HEAD
		iStartMyApp: function (oOptions) {
			oOptions = oOptions || {};
=======
<<<<<<< HEAD
		iStartMyApp: function (oOptionsParameter) {
			var oOptions = oOptionsParameter || {};
=======
		iStartMyApp: function (oOptions) {
			oOptions = oOptions || {};
>>>>>>> refs/heads/master
=======
		iStartMyApp: function (oOptionsParameter) {
			var oOptions = oOptionsParameter || {};
=======
		iStartMyApp: function (oOptions) {
			oOptions = oOptions || {};
>>>>>>> refs/heads/master
>>>>>>> refs/heads/master

			// start the app with a minimal delay to make tests fast but still async to discover basic timing issues
			oOptions.delay = oOptions.delay || 50;

			// start the app UI component
			this.iStartMyUIComponent({
				componentConfig: {
					name: "VendorMaster.VendorMaster",
					async: true
				},
				hash: oOptions.hash,
				autoWait: oOptions.autoWait
			});
		}
	});
});