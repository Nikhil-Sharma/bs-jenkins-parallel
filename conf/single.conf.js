exports.config = {
  user: 'nikhilsharma31',
  key: 'rTMqV2dudahjfBzSZ8xT',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      'browserName': 'Chrome',
      'browserstack.use_w3c': true,
      'bstack:options': {
        'os': 'Windows',
        'osVersion': '7',
        'sessionName': 'single_test',
        'buildName': 'cucumber-js-browserstack',
        'projectName': 'Test App',
        'debug': true,
      },
    }
  ]
}

async function example() {
  await driver.get("http://google.com");
  await driver.findElement(By.name("q")).sendKeys("Jenkins",Key.RETURN);
}
example();