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
    thumbnail: { type: "string" },
    description: { type: "string" },
    legacyID: { type: "string" },
    published: { type: "boolean", required: true },
    tags: { type: "list", of: { type: "string" } },
    readTime: {
      type: "nested",
      of: ReadTime
    },
    cover_image: { type: "string" }
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
    }
  }
}));
var contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkHtml],
    rehypePlugins: [rehypeRaw]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CR22XARN.mjs.map
