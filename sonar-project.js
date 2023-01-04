const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
	{
		serverUrl: "http://34.234.204.97:9000",
		projectKey: "react-project",
		projectName: "react-project",
		login: "admin",
		password: "admin",
		token: "caf930c9c60802114aae2656cd91d40e8453a70e",
		options: {
			"sonar.sources": "src",
			"sonar.tests": "src",
			"sonar.inclusions": "**", // Entry point of your code
			"sonar.test.inclusions":
				"src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx",
		},
	},
	() => process.exit()
);
