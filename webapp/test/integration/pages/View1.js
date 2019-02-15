sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
<<<<<<< HEAD
<<<<<<< HEAD
						id: "idAppControl",
=======
<<<<<<< HEAD
						id: "app",
=======
						id: "idAppControl",
>>>>>>> refs/heads/master
=======
						id: "app",
=======
						id: "idAppControl",
>>>>>>> refs/heads/master
>>>>>>> refs/heads/master
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The View1 view is displayed");
						},
						errorMessage: "Did not find the View1 view"
					});
				}
			}
		}
	});

});