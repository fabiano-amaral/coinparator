const chalk = require('chalk')
const Table = require('cli-table')
const figlet = require('figlet')

module.exports = {
  headerBar()  {
    console.log(
      chalk.white(
        figlet.textSync('coinparator', { horizontalLayout: 'default' })
      )
    )
	},
	buildTable(data) {
		const table = new Table({
			head: ['Moeda', 'Valor'],
			colWidths: [30, 20],
		})
		data.forEach((currency) => {
		table.push([currency.name, currency.ask])
		})
		console.log(table.toString())
	},
	buildConversionTable(data, value) {
		const table = new Table({
			head: ['Moeda destino', 'Valor convertido'],
			colWidths: [30, 20],
		})
		data.forEach((currency) => {
			table.push([currency.code, value/currency.ask])
		})
		console.log(table.toString())
	}
}
