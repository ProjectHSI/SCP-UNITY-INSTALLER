const fetch = require('node-fetch');
const fs = require('fs')
(async () => {
	const response = await fetch('https://raw.githubusercontent.com/ProjectHSI/SCP-UNITY-INSTALLER/master/version.json');
	const json = await response.json();
	if (fs.readFileSync('./version.json') == json) {
    console.log("Your version of this software is update to date!");
  } else {

  }
})();
