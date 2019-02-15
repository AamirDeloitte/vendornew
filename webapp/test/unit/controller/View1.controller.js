/*global QUnit*/

sap.ui.define([
	"VendorMaster/VendorMaster/controller/View1.controller"
<<<<<<< HEAD
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
=======
<<<<<<< HEAD
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
=======
], function (oController) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new oController();
>>>>>>> refs/heads/master
>>>>>>> refs/heads/master
		oAppController.onInit();
		assert.ok(oAppController);
	});

});