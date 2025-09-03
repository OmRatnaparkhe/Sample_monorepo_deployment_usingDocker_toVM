// prisma.config.ts
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./packages/db/prisma/schema.prisma",
  // optional: output shared client into packages/db
  // generator: { client: { output: "./packages/db/generated/client" } }
});
