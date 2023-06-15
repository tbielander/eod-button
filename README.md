# eod button
The eod (**e**book **o**n **d**emand) button is an HTML button added to the customization package of Ex Libris discovery tool [Primo VE](https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/010Getting_Started_with_Primo_VE/005Primo_VE_Overview). It allows patrons to order digital copies of copyright free works by the [eBooks on Demand (EOD) service](https://books2ebooks.eu/) of the EOD network hosted at the University and State Library of Tyrol.

The order button shows up in the full view of the physical title if certain conditions concerning terms of protection, location and archival level are met. The script for checking the conditions must be located in the `custom.js` file inside the institution's customization package. Please note that the name of the customization package is part of the AngularJS `templateUrl` option which has to be adjusted properly.

Clicking on the button opens an info box summarizing the terms of the service and listing the items available for EOD. Following the corresponding link starts the order process by calling the EOD order form. Depending on the styling of the template the eod button will look similar to this [example from University Library Basel](https://basel.swisscovery.org/permalink/41SLSP_UBS/mmbbsj/alma9957024070105504).
