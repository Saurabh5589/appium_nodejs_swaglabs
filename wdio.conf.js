exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1, // Run one session at a time
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': '.MainActivity',
    }],
    logLevel: 'info',
    services: ['appium'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    reporters: [
      'spec', // Default reporter for logging output
      [
          'allure',
          {
              outputDir: 'allure-results', // Folder to store Allure results
              disableWebdriverStepsReporting: true, // Disable step reporting
              disableWebdriverScreenshotsReporting: false, // Enable screenshots in Allure
          }
      ],
  ],
};