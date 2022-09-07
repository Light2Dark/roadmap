import { createServer } from "@graphql-yoga/node";
import { join } from "path"; // give array of string args and it will join them tgt
import { readFileSync } from "fs";
import { Resolvers } from "../../types";

import prisma from "../../lib/prisma";
import type { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export type GraphQLContext = {
  prisma: PrismaClient;
};

export async function createContext(): Promise<GraphQLContext> {
  return {
    prisma,
  };
}

// since we're using vercel deployment,
// process.cwd will return the current working dir in production deployment, this is a special requirement for vercel deployment
const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

// roadmap resolver takes 2 params, 1st is root/parent object, 2nd is args
const resolvers: Resolvers = {
  Query: {
    roadmap: (_, { id }) => {
      return {
        id,
        title: "Ohana Roadmap",
      };
    },
  },
};

const server = createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  endpoint: "/api", // entry point is at localhost:4000/api
  schema: {
    typeDefs,
    resolvers,
  },
  context: createContext(),
});

export default server;
