const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'Tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.saucedemo.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'BTKAkademiTest'
}