const User = require('../models/user.model');

const usersModule = {
    save: async (data) => {
        let tempUser = await User.findOne({username: data.username});
        if (!tempUser) {
            let user = {...data, role: "user"};
            let newUser = await new User(user).save();
            return {auth: true, user: newUser};
        } else return {auth: false}
    },
    login: async (data) => {
       let tempUser = await User.findOne({username: data.username, password: data.password});
       if (tempUser) {
         return {auth: true ,user: tempUser};
       } else return {auth: false};
    }
}

module.exports = usersModule;