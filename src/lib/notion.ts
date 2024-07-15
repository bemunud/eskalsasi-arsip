import "server-only";
import { Client } from "@notionhq/client";
import React from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Live",
      },
    },
  });
});

export const fetchBySlug = React.cache(async (slug: string) => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  return res.results[0] as PageObjectResponse | undefined;
});

export const fetchPageBloks = React.cache(async (pageId: string) => {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });
  return res.results as BlockObjectResponse[];
});
