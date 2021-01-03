const Link = require("./models/Link");

module.exports = {
    Query: {
        info: () => `This is the API of the Hackernews Clone`,
        feed: async (root, args) => {
            const links = await Link.find({});
            return links;
        }
    },

    Mutation: {
        createLink: async (root, args) => {
            const newLink = await new Link ({
                ...args,
            }
            ).save();
            return newLink;
        },

        updateLink: async (root, { _id, url, description}) => {
            const link = await Link.findOne({'_id': _id});

            if(link.url != url){
                link.url = url
            };
            if(link.description != description) {
                link.description = description
            };
            const linkUpdated = await link.save();
            return linkUpdated;
        },

        deleteLink: async (root, {_id}) => {
            const link = await Link.findByIdAndDelete({'_id': _id});
            return link;
        }
    }
};
