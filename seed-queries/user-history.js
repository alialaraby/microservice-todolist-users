exports.insertUserHistory = async (UserHistory) => {
    try {     
        const insertedHistory = await UserHistory.create({
            description: 'user logged in',
            UserId: 1,
            UserActionId: 1
        });
        return insertedHistory;
    } catch (error) {
        console.log(error);
    }
}