exports.insertUserActions = async (UserAction) => {
    try {     
        const userInsertedActions = await UserAction.bulkCreate([
            { name: 'login' },
            { name: 'change password' },
            { name: 'logout' },
            { name: 'reset password' },
        ]);
        return userInsertedActions;
    } catch (error) {
        console.log(error);
    }
}