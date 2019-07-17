const Icon = require('../models/icon.model');

const iconsModule = {
    save: async (icon) => {
        let iconQuery = await Icon.find({image: icon.image});
        if (iconQuery.length > 0) return {success: false, warning: "duplicate warning, image allready exists"};
        else {
            let iconNameQuery = await Icon.find({name: icon.name});
            if (iconNameQuery.length > 0) return {success: false, warning: "duplicate warning, name allready taken"};
            else {
                let newIcon = await new Icon(icon).save();
                return {success: true, icon: newIcon};
            }
        }
    },
    get: async () => {
        return await Icon.find();
    },
    delete: (iconId) => {
        return Icon.deleteOne({_id: iconId});
    },
    update: (id, icon) => {
        return Icon.findOneAndUpdate({_id: id}, icon);
    }
}

module.exports = iconsModule;