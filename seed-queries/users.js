exports.insertUser = async (User) => {
    try {     
        const insertedUser = await User.create({
            fullName: 'ali sakr alaraby',
            email: 'ali@ali.com',
            username: 'aliali',
            password: 'exFR@#5648**Vv'
        });
        console.log(insertedUser);
        return insertedUser;
    } catch (error) {
        console.log('error in user: ', error);
    }
}