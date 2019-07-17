const Shirt = require('../models/shirt.model');

const shirtsModule = {
   save: async (shirt) => {
        let shirtQuery = await Shirt.find({type: shirt.type});
        if (shirtQuery.length > 0) return {success: false, warning: "type allready exists"};
        else {
            let newShirt = await new Shirt(shirt).save();
            return {success: true, shirt: newShirt};
        }
   },
   get: () => {
       return Shirt.find();
   },
   delete: (shirtId) => {
        return Shirt.deleteOne({_id: shirtId});
   },
   update: (id, shirt) => {
        return Shirt.findOneAndUpdate({_id: id}, shirt);
   }
}

module.exports = shirtsModule;