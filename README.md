setup- run as sudo or admin:
- Install node which gives npm also
-- sudo curl -O -L https://npmjs.org/install.sh
-- sudo sh install.sh

- And the get latest npm 
-- sudo npm install npm -g

- Install xplat-cli
-- sudo npm install azure-cli -g

- Change the config mode to arm
-- azure config mode arm

- login
-- azure login -u username -p password

- logout
-- azure logout -u <username>

- show all resource goups under subscription
-- azure group list

- show all resources under a resource group
-- azure group show Group-1

- get server resource
-- azure resource show Group-1 testausservert  Microsoft.Sql/servers 2014-04-01-preview

- get db resource
-- azure resource show Group-1 testausdb  Microsoft.Sql/servers/databases 2014-04-01-preview --parent servers/testausservert

Files which generates bearer token
==================================
- lib/util/authentication/AccessTokenCloudCredentials.js
- lib/util/authentication/adalAuth.js

Files which perform get operation on resources
==============================================
- node-modules/azure-mgmt-resource/lib
--ResourceManagementClient.js
- node-modules/azure-mgmt-authorization/lib
-- AuthorizationManagementClient.js
