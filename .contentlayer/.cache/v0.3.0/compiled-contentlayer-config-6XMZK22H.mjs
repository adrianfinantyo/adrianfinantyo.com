// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeRaw from "rehype-raw";
import remarkHtml from "remark-html";
var ReadTime = defineNestedType(() => ({
  name: "ReadTime",
  fields: {
    text: { type: "string", required: true },
    minutes: { type: "number", required: true },
    time: { type: "number", required: true },
    words: { type: "number", required: true }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    cover: { type: "string", required: true },
    description: { type: "string" },
    published: { type: "boolean", required: true },
    tags: { type: "list", of: { type: "string" } },
    readTime: {
      type: "nested",
      of: ReadTime
    }
  },
  computedFields: {
    readTime: {
      type: "nested",
      of: ReadTime,
      resolve: (post) => readingTime(post.body.raw)
    },
    id: {
      type: "string",
      // eslint-disable-next-line no-underscore-dangle
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$|\.mdx$/, "")
    },
    slug: {
      type: "string",
      resolve: (post) => post.title.toLowerCase().replace(/ /g, "-")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.md",
  fields: {
    title: { type: "string", required: true },
    name: { type: "string", required: true },
    date: { type: "string", required: true },
    feautured: { type: "boolean", required: true },
    cover: { type: "string", required: true },
    logo: { type: "string", required: true },
    published: { type: "boolean", required: true },
    stack: { type: "list", of: { type: "string" }, required: true },
    projectLink: { type: "string" },
    githubLink: { type: "string" },
    description: { type: "string" }
  },
  computedFields: {
    id: {
      type: "string",
      // eslint-disable-next-line no-underscore-dangle
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$|\.mdx$/, "")
    },
    slug: {
      type: "string",
      resolve: (post) => post.name.toLowerCase().replace(/ /g, "-")
    }
  }
}));
var contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  markdown: {
    remarkPlugins: [remarkHtml],
    rehypePlugins: [rehypeRaw]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6XMZK22H.mjs.map
