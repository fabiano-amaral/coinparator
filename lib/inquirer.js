const inquirer = require('inquirer')

module.exports = {
  askCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Insira nome de usuário: ',
        validade: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Nome de usuário inválido.'
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message:'Insira sua senha: ',
        validade: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Senha inválida.'
          }
        }
      }
    ]
    return inquirer.prompt(questions)
  },
  selectFunction: () => {
    const question = {
      name: 'option',
      type: 'list',
      message: 'Escolha uma opção',
      choices: [
        {
          name: 'Buscar cotações',
          value: 1,
        },
        {
          name: 'Fazer conversão BRL ->',
          value: 2,
        },
        {
          name: 'Sair',
          value: 3,
        },
      ]
    }
    return inquirer.prompt(question)
  }
}