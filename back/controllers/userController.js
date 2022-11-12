
// @desc   GetUserProfile
// @route   GET /api/users/profile
// @access  Private

export const getUserProfile = (req, res) => {
    const user = {
        name: 'Egor',
        age: 18 
    }
    res.json(user)
}