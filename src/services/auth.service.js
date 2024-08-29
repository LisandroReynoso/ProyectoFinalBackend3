import User from "../models/user.models.js"

const authService = {
    
    getUsersByEmail: async function (email) {
        return await User.findOne({email})
    },
    
    getUsersByUsername: async function (username) {
        return await User.findOne({username})
    },

    
}

export default authService