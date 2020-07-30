const fetch = require('node-fetch');
const fs = require('fs')
var UpdateScript = async () => {
	const response = await fetch('https://raw.githubusercontent.com/ProjectHSI/SCP-UNITY-INSTALLER/master/version.json');
	const json = await response.json();
	if (fs.readFileSync('./version.json') == json) {
    console.log("Your version of this software is update to date!");
  } else {
      const response = await fetch('https://raw.githubusercontent.com/ProjectHSI/SCP-UNITY-INSTALLER/master/index.js');
    	const text = await response.text();
      fs.writeFileSync("./index.js", text)
      fs.writeFileSync("./version.json", json)
      console.log("Please restart the program. I will exit for you.");
      process.exit(0)
  }
}
UpdateScript()
//This is to know if my code can update
