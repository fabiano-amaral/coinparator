const inquirer = require('inquirer')
	const {
		isNil,
		isEmpty,
		anyPass,
	} = require('ramda')

	const invalidCredential = anyPass([
		isNil,
		isEmpty,
	])

	module.exports = {
		askCredentials() {
			const questions = [
				{
					name: 'username',
					type: 'input',
					message: 'Insira nome de usuário:',
					validate: function (value) {
						if (invalidCredential(value)) {
              return 'Nome de usuário inválido.'
						} else {
							return true
						}
					}
				},
				{
					name: 'password',
					type: 'password',
					message:'Insira sua senha:',
					validate: function (value) {
						if (invalidCredential(value)) {
              return 'Senha inválida.'
            } else {
							return true
          }
        }
      }
    ]
    return inquirer.prompt(questions)
  },
  selectFunction() {
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
	},
	continuar() {
		const question = {
			name: 'continue',
			type:'list',
			message: 'tecle ENTER para voltar',
			choices: [
				{
					name: 'Voltar',
					value: 1,
				}
			],
		}
    return inquirer.prompt(question)
  },
  selectConvert(data) {
    const toCurrency = {
      name: 'convertTo',
      type: 'list',
      message: 'Selecione a moeda de destino'
    }
    const choices = data.map((elem, index) => {
      return {
        name: elem.code,
        value: index,
      }
    })
    toCurrency.choices = choices
    const fromValue = {
      name: 'value',
      type: 'input',
      message: 'Digite o valor? (BRL)',
      validade: function(value) {
        if (Number.isFinite) {
          return true
        }
        else {
          return 'Número deve ser finito.'
        }
      }
    }
    const questions = [
      fromValue,
    ]
    return inquirer.prompt(questions)
  }

}
