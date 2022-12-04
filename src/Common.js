/**************************************************************************************************************
License:
MIT License

Copyright (c) [2022] [cdcentral]

***************************************************************************************************************

From source code author: Chris Duran

This project and its source code is free for anyone to use and modify.  Please retain this header and the following links.

This source code can be found in the following youtube video https://youtu.be/7TYL6BPZVmw
The main channel is https://www.youtube.com/@CDCentral
Donations are appreciated at https://paypal.me/AncoCentral?country.x=US&locale.x=en_US
**************************************************************************************************************/

/************************************************************************
* Checks local storage if a keycloak object is stored.
************************************************************************/
function checkLocalStorage() {
        //console.log('[Common] checkLocalStorage().');
		var localKC = localStorage.getItem('keycloakInfo');

		try {
			if (localKC !== undefined && localKC !== null) {
				localKC = JSON.parse(localKC);
				console.log('[Common] checkLocalStorage() -> is authenticated: ' + localKC.authenticated);

				if (localKC.idTokenParsed === undefined || localKC.idTokenParsed === null) {
					//console.log('[Common] checkLocalStorage() -> local storage keycloak object\'s idTokenParsed is undefined or null.');
					return null;
				} else {
					//console.log('[Common] checkLocalStorage() -> keycloak data found in local storage. The users name is: ' + localKC.idTokenParsed.name);
					return localKC;
				}
			} else {
				//console.log('[Common] checkLocalStorage() -> localKC is either null or undefined. Returning null.');
				return null;
			}
		} catch (error) {
			//console.log('[Common] checkLocalStorage() -> try-catch error: ' + error);
			return null;
		}
}


	/*******************************************************************************
	* Gets invoked when the user clicks the Logout button.  This does two things.
	* 1. Clears local storage for 'keycloakInfo'
	* 2. Invokes logout url
	*******************************************************************************/
	function handleLogout(logoutUrl) {
		console.log('[Common] handleLogout() -> removing keycloakInfo from local storage then route user to logout url');
		localStorage.removeItem('keycloakInfo');
		window.location.replace(logoutUrl);
	}
	
export { checkLocalStorage, handleLogout};