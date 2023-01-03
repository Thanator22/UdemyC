const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
	{
		serverUrl: "http://localhost:9000",
		projectKey: "react-project",
		projectName: "react-project",
		login: "admin",
		password: "Admin",
		token: "sqp_715b5fc53a750722ca203cf9b160907a6e84ab97",
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
