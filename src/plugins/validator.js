import uniqueEmail from './validators/uniqueEmail'
import VeeValidate, {Validator} from 'vee-validate'
import ptBR from 'vee-validate/dist/locale/pt_BR'

Validator.localize('pt_BR', ptBR)

Validator.extend('unique', {
    validate: uniqueEmail,
    getMessage: (field, params, data) => {
        return data.message
    }
})

export default VeeValidate
