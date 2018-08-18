#!/usr/bin/env node
const clear = require('clear')
const inquirer = require('./lib/inquirer')
const { headerBar } = require('./lib/menus')

const run = async () => {
  clear()
  headerBar()
  const credentials = await inquirer.askCredentials()
  while(true) {
    clear()
    headerBar()
    const { option } = await inquirer.selectFunction()
    switch(option) {
      case 1: // busca api
        break
      case 2: // converte
        break
      case 3: // sair
        return
    }
  }
}

run()
