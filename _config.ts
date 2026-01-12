import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import * as ako from "@tuyuji/akojs";
import basePath from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts";
import toc from "lume_markdown_plugins/toc.ts";

const site = lume({
});

site.use(basePath());
site.use(tailwindcss());
site.use(date());
site.use(nav());
site.use(toc());
site.use(code_highlight({
  theme: {
    name: "atom-one-dark",
    cssFile: "/style.css",
    placeholder: "/* Code Styles */",
  },
}));
site.loadData([".ako"], async (path) => {
  return ako.parse(await Deno.readTextFile(path));
});

site.preprocess([".md"], (pages) => {
  for (const page of pages) {
    const content = page.data.content as string;
    const match = content.match(/^---ako\s*([\s\S]+?)\s*---/);
    if(match)
    {
      const frontMatter = ako.parse(match[1]);
      const bodyContent = content.slice(match[0].length).trimStart();

      page.data.content = bodyContent;

      Object.assign(page.data, frontMatter);
    }
  }
});

site.add("style.css");
site.add("code-style.css");
site.add("logo.svg");
site.add("static", ".");

export default site;
