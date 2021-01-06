exports.config = {
  user: 'nikhilsharma31',
  key: 'rTMqV2dudahjfBzSZ8xT',
  server: 'hub-cloud.browserstack.com',
  commonCapabilities: {
    'browserstack.use_w3c': true,
    'bstack:options': {
      'sessionName': 'parallel_test',
      'buildName': 'cucumber-js-browserstack',
      'projectName': 'Test App',
      'debug': true,
    },
  },

  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'internet explorer'
  },{
    browserName: 'safari'
  }],
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
    Object.assign(caps, exports.config.commonCapabilities);
});