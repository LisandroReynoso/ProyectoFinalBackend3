const userResponseDTO = (user) => {
    return {
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    }
}

export default userResponseDTO