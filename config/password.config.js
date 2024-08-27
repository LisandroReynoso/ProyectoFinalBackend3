import bycrypt from 'bcrypt'

const salt = 10 

export const crearHash = password => {
    const hashPassword = bycrypt.hashSync(password, salt) 
    console.log(hashPassword)
    return hashPassword
}

export const verifyPassword = (password, hashPassword) => bycrypt.compareSync(password, hashPassword)