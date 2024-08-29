import User from "../models/user.models.js"

const userService = {
    createUser: async function (user) {
        return await User.create(user)
    },
    
    getUsers: async function () {
        return await User.find()
    },

    getUsersById: async function (userId) {
        return await User.findById(userId)
    },

    updateUser: async function (userId, userData) {
        return await User.findByIdAndUpdate(userId, userData, { new: true})   
    },

    deleteUser: async function (userId) {
        return await User.findByIdAndDelete(userId)
    }

}

export default userService