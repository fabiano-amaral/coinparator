const chalk = require('chalk')
const figlet = require('figlet')

module.exports = {
  headerBar: () => {
    console.log(
      chalk.white(
        figlet.textSync('coinparator', { horizontalLayout: 'full' })
      )
    )
  }
}