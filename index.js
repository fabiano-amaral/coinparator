#!/usr/bin/env node
const moment = require('moment')
const Configstore = require('configstore')
const clear = require('clear')
const inquirer = require('./lib/inquirer')
const pkg = require('./package.json')
const {
  headerBar,
  buildTable,
	buildConversionTable
} = require('./lib/menus')
const {
  fetchCurrencys
} = require('./lib/utils')

const conf = new Configstore(pkg.name)

const run = async () => {
  clear()
  headerBar()
  const credentials = await inquirer.askCredentials()

  while(true) {
    clear()
    headerBar()
    const { option } = await inquirer.selectFunction()
    const now = moment()
    const leastRequest = moment(conf.get('leastRequest'))
    let data
    if(now.isAfter(leastRequest.add(10, 'm'))) {
      console.log('olá');
      data = await fetchCurrencys()
      conf.set('leastRequest', now)
      conf.set('data', data)
    }
    else {
      data = conf.get('data')
    }
    switch(option) {
      case 1: // busca api
        buildTable(data)
        await inquirer.continuar()
        break
      case 2: // converte
        const { value }= await inquirer.selectConvert(data)
				buildConversionTable(data, value)
				await inquirer.continuar()
        break
      case 3: // sair
        return
    }
  }
}

run()
