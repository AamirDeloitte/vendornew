<<<<<<< HEAD
// eslint-disable-next-line sap-no-global-define
window.suite = function () {
	"use strict";
	/* eslint-disable new-cap */
=======
<<<<<<< HEAD
<<<<<<< HEAD
// eslint-disable-next-line sap-no-global-define
window.suite = function () {
	"use strict";
	/* eslint-disable new-cap */
=======
window.suite = function () {
	"use strict";

>>>>>>> refs/heads/master
=======
window.suite = function () {
	"use strict";

>>>>>>> refs/heads/master
>>>>>>> refs/heads/master
	var oSuite = new parent.jsUnitTestSuite(),
		sContextPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);

	oSuite.addTestPage(sContextPath + "unit/unitTests.qunit.html");
	oSuite.addTestPage(sContextPath + "integration/opaTests.qunit.html");

	return oSuite;
};