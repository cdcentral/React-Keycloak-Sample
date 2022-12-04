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

import Keycloak from "keycloak-js";

/*
Simply declaring new keycloak object with url/realm/clientId endpoints set.
See this link for more information on the keycloak object https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter
*/
const keycloak = new Keycloak({
	url: 'http://<your keycloak domain url>:<your keycloak port>/auth/', // sample url 'http://localhost:8081/auth/',
	realm: '<Your Realm within keycloak>', // sample realm: 'ReactChatApp',
	clientId: '<Your clientId within your Realm>' //sample client id: 'chatApp'
});

export default keycloak;