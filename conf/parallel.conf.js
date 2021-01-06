exports.config = {
  user: 'nikhilsharma31',
  key: 'rTMqV2dudahjfBzSZ8xT',
  server: 'hub-cloud.browserstack.com',

  commonCapabilities: {
    name: 'Bstack-[CucumberJS] Parallel Test',
    "browserstack.debug": true
  },

  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'safari'
  },{
    browserName: 'internet explorer'
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});