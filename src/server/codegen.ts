// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'
import type { CodegenConfig } from '@graphql-codegen/cli'

const PATH_TO_SERVER_DIR = 'src/server'
/**
 * Server Presetを採用したcodegenの設定
 * @see https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset#3-configure-codegen-config
 */
const config: CodegenConfig = {
  generates: {
    [`${PATH_TO_SERVER_DIR}/src/schemas`]: defineConfig({}),
  },
  hooks: {
    afterAllFileWrite: ['prettier -w'],
  },
  schema: `${PATH_TO_SERVER_DIR}/**/schema.graphql`,
}

export default config
