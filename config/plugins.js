module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        review: {
          field: "slug",
          references: "title",
        },
        project: {
          field: "slug",
          references: "title",
        },
        category: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
        defaultLimit: 10,
        maxLimit: 20,
        shadowCRUD: true,
        apolloServer: {
            tracing: true,
        },
    }
},
});
