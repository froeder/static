import axios from 'axios'

const uniqueEmail = async (value) => {
    try {
        const {data} = await axios.get(`/auth/exists/${value}`)
        if (data.exist) {
            return {
                valid: false,
                data: {
                    message: 'Já existe o E-mail informado'
                }
            }
        } else {
            return {
                valid: true,
                data: {
                    message: ''
                }
            }
        }
    } catch (err) {
        return {
            valid: false,
            data: {
                message: err
            }
        }
    }
}

export default uniqueEmail
