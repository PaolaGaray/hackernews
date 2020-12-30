

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    "id": "link-2",
    "description": "Prisma replaces traditional ORMs",
    "url": "www.prisma.io"
  }
];

let idCount = links.length;


module.exports = {
    Query: {
        info: () => `This is the API of the Hackernews Clone`,
        feed: () => links,
        link: (parent, args) => {
            const link = links.find(link => link.id === args.id);
            return link;
        }
    },

    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url:(parent) => parent.url
    },

    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link);
            return link
        },

        updateLink: (parent, args) => {
            const { id, url, description } = args;
            if(url){links.find(link => link.id === id).url = url;};
            if(description){links.find(link => link.id === id).description = description;}
            const indexLinkUpdated = links.indexOf(links.find(link => link.id === id));
            return links[indexLinkUpdated];
        },

        deleteLink: (parent, args) => {
            const { id } = args;
            const indexLinkToDelete = links.indexOf(links.find(link => link.id === id));
            const linkToDelete = links[indexLinkToDelete];
            links.splice(indexLinkToDelete, 1);
            return linkToDelete;
        }
    }
};
