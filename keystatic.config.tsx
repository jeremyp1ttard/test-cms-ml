import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "jeremyp1ttard",
      name: "test-cms-ml",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
