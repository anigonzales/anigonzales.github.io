const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision
const Downloader = require('puppeteer/utils/ChromiumDownloader')
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision)

process.env.CHROME_BIN = revisionInfo.executablePath

module.exports = function(config) {
  config.set({
    frameworks: ['chai', 'mocha', 'sinon-chai', 'sinon'],
    files: [
      {pattern: 'lib/chai.js', included: false, served: true},            
      {pattern: 'lib/sinon-chai.js', included: false, served: true},            
      {pattern: 'lib/sinon.js', included: false, served: true},                   
      {pattern: 'karmaTest.html', included: true, served: true},
      {pattern: 'src/underbar.js', included: false, served: true},
      {pattern: 'test/**/*.js', included: false, served: true},
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    concurrency: Infinity
  })
}