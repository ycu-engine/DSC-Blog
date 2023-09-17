import type { DocumentNode } from 'graphql'
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'hello', loc: { start: 15, end: 20 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 22, end: 28 } },
              loc: { start: 22, end: 28 },
            },
            loc: { start: 22, end: 29 },
          },
          directives: [],
          loc: { start: 15, end: 29 },
        },
      ],
      loc: { start: 0, end: 31 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Node', loc: { start: 43, end: 47 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 52, end: 54 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 56, end: 58 } },
              loc: { start: 56, end: 58 },
            },
            loc: { start: 56, end: 59 },
          },
          directives: [],
          loc: { start: 52, end: 59 },
        },
      ],
      loc: { start: 33, end: 61 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Post', loc: { start: 67, end: 71 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 83, end: 87 } },
          loc: { start: 83, end: 87 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 92, end: 94 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 96, end: 98 } },
              loc: { start: 96, end: 98 },
            },
            loc: { start: 96, end: 99 },
          },
          directives: [],
          loc: { start: 92, end: 99 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 102, end: 107 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 109, end: 115 } },
              loc: { start: 109, end: 115 },
            },
            loc: { start: 109, end: 116 },
          },
          directives: [],
          loc: { start: 102, end: 116 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'body', loc: { start: 119, end: 123 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 125, end: 131 } },
              loc: { start: 125, end: 131 },
            },
            loc: { start: 125, end: 132 },
          },
          directives: [],
          loc: { start: 119, end: 132 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'author', loc: { start: 135, end: 141 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MemberUser', loc: { start: 143, end: 153 } },
              loc: { start: 143, end: 153 },
            },
            loc: { start: 143, end: 154 },
          },
          directives: [],
          loc: { start: 135, end: 154 },
        },
      ],
      loc: { start: 62, end: 156 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 167, end: 171 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 176, end: 178 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 180, end: 182 } },
              loc: { start: 180, end: 182 },
            },
            loc: { start: 180, end: 183 },
          },
          directives: [],
          loc: { start: 176, end: 183 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 186, end: 195 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 197, end: 203 } },
              loc: { start: 197, end: 203 },
            },
            loc: { start: 197, end: 204 },
          },
          directives: [],
          loc: { start: 186, end: 204 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 207, end: 215 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 217, end: 223 } },
              loc: { start: 217, end: 223 },
            },
            loc: { start: 217, end: 224 },
          },
          directives: [],
          loc: { start: 207, end: 224 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 227, end: 235 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 237, end: 243 } },
              loc: { start: 237, end: 243 },
            },
            loc: { start: 237, end: 244 },
          },
          directives: [],
          loc: { start: 227, end: 244 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 247, end: 252 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 254, end: 260 } },
              loc: { start: 254, end: 260 },
            },
            loc: { start: 254, end: 261 },
          },
          directives: [],
          loc: { start: 247, end: 261 },
        },
      ],
      loc: { start: 157, end: 263 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MemberUser', loc: { start: 270, end: 280 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 292, end: 296 } },
          loc: { start: 292, end: 296 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'User', loc: { start: 299, end: 303 } },
          loc: { start: 299, end: 303 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 308, end: 310 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 312, end: 314 } },
              loc: { start: 312, end: 314 },
            },
            loc: { start: 312, end: 315 },
          },
          directives: [],
          loc: { start: 308, end: 315 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 318, end: 327 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 329, end: 335 } },
              loc: { start: 329, end: 335 },
            },
            loc: { start: 329, end: 336 },
          },
          directives: [],
          loc: { start: 318, end: 336 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 339, end: 347 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 349, end: 355 } },
              loc: { start: 349, end: 355 },
            },
            loc: { start: 349, end: 356 },
          },
          directives: [],
          loc: { start: 339, end: 356 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 359, end: 367 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 369, end: 375 } },
              loc: { start: 369, end: 375 },
            },
            loc: { start: 369, end: 376 },
          },
          directives: [],
          loc: { start: 359, end: 376 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 379, end: 384 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 386, end: 392 } },
              loc: { start: 386, end: 392 },
            },
            loc: { start: 386, end: 393 },
          },
          directives: [],
          loc: { start: 379, end: 393 },
        },
      ],
      loc: { start: 265, end: 395 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'NormalUser', loc: { start: 402, end: 412 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 424, end: 428 } },
          loc: { start: 424, end: 428 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'User', loc: { start: 431, end: 435 } },
          loc: { start: 431, end: 435 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 440, end: 442 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 444, end: 446 } },
              loc: { start: 444, end: 446 },
            },
            loc: { start: 444, end: 447 },
          },
          directives: [],
          loc: { start: 440, end: 447 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 450, end: 459 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 461, end: 467 } },
              loc: { start: 461, end: 467 },
            },
            loc: { start: 461, end: 468 },
          },
          directives: [],
          loc: { start: 450, end: 468 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 471, end: 479 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 481, end: 487 } },
              loc: { start: 481, end: 487 },
            },
            loc: { start: 481, end: 488 },
          },
          directives: [],
          loc: { start: 471, end: 488 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 491, end: 499 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 501, end: 507 } },
              loc: { start: 501, end: 507 },
            },
            loc: { start: 501, end: 508 },
          },
          directives: [],
          loc: { start: 491, end: 508 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 511, end: 516 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 518, end: 524 } },
              loc: { start: 518, end: 524 },
            },
            loc: { start: 518, end: 525 },
          },
          directives: [],
          loc: { start: 511, end: 525 },
        },
      ],
      loc: { start: 397, end: 527 },
    },
  ],
  loc: { start: 0, end: 528 },
} as unknown as DocumentNode
