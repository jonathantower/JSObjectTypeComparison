// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	navigator.splashscreen.hide();
}

function doClick() {
    //
	//////////////////////////////////////////////////////////////////
	// CREATE VARIOUS OBJECT TYPES
    //////////////////////////////////////////////////////////////////
    
	// DOM object representing <div>
	var domObject = document.getElementById("divSample");
    
	// JQuery object representing <div>
	var jqueryObject = $("#divSample");
    
	// return from function to create a kendo ListView object on <div>
	var kendoObjectCreated = $("#divSample").kendoMobileListView({
		// create options go here
	});
    
	// retreiving kendo ListView object from data-* attribute on <div>
	var kendoObjectRetrieved = $("#divSample").data("kendoMobileListView");
    
    //
	//////////////////////////////////////////////////////////////////
	// TESTS
    //////////////////////////////////////////////////////////////////
    
	// 1
	console.log((domObject === jqueryObject) ? "1) TRUE" : "1) FALSE");
    
	// 2
	console.log((kendoObjectCreated === kendoObjectRetrieved) ? "2) TRUE" :"2) FALSE");
    
	// 3
	console.log((kendoObjectCreated.data("kendoMobileListView") === kendoObjectRetrieved) ? "3) TRUE" :"3) FALSE");

	// 4
	console.log((jqueryObject == kendoObjectRetrieved.element) ? "4) TRUE" :"4) FALSE");
    
	// 5
	console.log(jqueryObject.is(kendoObjectRetrieved.element) ? "5) TRUE" :"5) FALSE");

	// 6
	console.log((jqueryObject.is(domObject)) ? "6) TRUE" :"6) FALSE");
    
	// 7
	console.log((jqueryObject[0] === domObject) ? "7) TRUE" :"7) FALSE");
    
	// 8
	console.log(jqueryObject.is(kendoObjectRetrieved) ? "8) TRUE" :"8) FALSE");
}