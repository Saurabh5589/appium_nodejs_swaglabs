const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, './reports/cucumber-json/results.json'), // Path to JSON report
    output: path.join(__dirname, './reports/cucumber-html/report.html'),  // Path to save HTML report
    reportSuiteAsScenarios: true,
    launchReport: true, // Automatically open the report after generation
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "QA",
        Browser: "Chrome 89.0.4389.82",
        Platform: "MacOS",
        Parallel: "Scenarios",
        Executed: "Local"
    }
};

reporter.generate(options);