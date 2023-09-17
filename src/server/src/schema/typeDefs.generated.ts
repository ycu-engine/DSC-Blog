import type { DocumentNode } from 'graphql'
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Node', loc: { start: 37, end: 41 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 46, end: 48 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 50, end: 52 } },
              loc: { start: 50, end: 52 },
            },
            loc: { start: 50, end: 53 },
          },
          directives: [],
          loc: { start: 46, end: 53 },
        },
      ],
      loc: { start: 27, end: 55 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 69, end: 74 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'hello', loc: { start: 79, end: 84 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 86, end: 92 } },
              loc: { start: 86, end: 92 },
            },
            loc: { start: 86, end: 93 },
          },
          directives: [],
          loc: { start: 79, end: 93 },
        },
      ],
      loc: { start: 57, end: 95 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Post', loc: { start: 101, end: 105 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 117, end: 121 } },
          loc: { start: 117, end: 121 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 126, end: 128 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 130, end: 132 } },
              loc: { start: 130, end: 132 },
            },
            loc: { start: 130, end: 133 },
          },
          directives: [],
          loc: { start: 126, end: 133 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 136, end: 141 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 143, end: 149 } },
              loc: { start: 143, end: 149 },
            },
            loc: { start: 143, end: 150 },
          },
          directives: [],
          loc: { start: 136, end: 150 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'body', loc: { start: 153, end: 157 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 159, end: 165 } },
              loc: { start: 159, end: 165 },
            },
            loc: { start: 159, end: 166 },
          },
          directives: [],
          loc: { start: 153, end: 166 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'author', loc: { start: 169, end: 175 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MemberUser', loc: { start: 177, end: 187 } },
              loc: { start: 177, end: 187 },
            },
            loc: { start: 177, end: 188 },
          },
          directives: [],
          loc: { start: 169, end: 188 },
        },
      ],
      loc: { start: 96, end: 190 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 204, end: 209 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'samplePosts', loc: { start: 214, end: 225 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Post', loc: { start: 228, end: 232 } },
                  loc: { start: 228, end: 232 },
                },
                loc: { start: 228, end: 233 },
              },
              loc: { start: 227, end: 234 },
            },
            loc: { start: 227, end: 235 },
          },
          directives: [],
          loc: { start: 214, end: 235 },
        },
      ],
      loc: { start: 192, end: 237 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 248, end: 252 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 257, end: 259 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 261, end: 263 } },
              loc: { start: 261, end: 263 },
            },
            loc: { start: 261, end: 264 },
          },
          directives: [],
          loc: { start: 257, end: 264 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 267, end: 276 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 278, end: 284 } },
              loc: { start: 278, end: 284 },
            },
            loc: { start: 278, end: 285 },
          },
          directives: [],
          loc: { start: 267, end: 285 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 288, end: 296 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 298, end: 304 } },
              loc: { start: 298, end: 304 },
            },
            loc: { start: 298, end: 305 },
          },
          directives: [],
          loc: { start: 288, end: 305 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 308, end: 316 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 318, end: 324 } },
              loc: { start: 318, end: 324 },
            },
            loc: { start: 318, end: 325 },
          },
          directives: [],
          loc: { start: 308, end: 325 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 328, end: 333 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 335, end: 341 } },
              loc: { start: 335, end: 341 },
            },
            loc: { start: 335, end: 342 },
          },
          directives: [],
          loc: { start: 328, end: 342 },
        },
      ],
      loc: { start: 238, end: 344 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MemberUser', loc: { start: 351, end: 361 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 373, end: 377 } },
          loc: { start: 373, end: 377 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'User', loc: { start: 380, end: 384 } },
          loc: { start: 380, end: 384 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 389, end: 391 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 393, end: 395 } },
              loc: { start: 393, end: 395 },
            },
            loc: { start: 393, end: 396 },
          },
          directives: [],
          loc: { start: 389, end: 396 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 399, end: 408 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 410, end: 416 } },
              loc: { start: 410, end: 416 },
            },
            loc: { start: 410, end: 417 },
          },
          directives: [],
          loc: { start: 399, end: 417 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 420, end: 428 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 430, end: 436 } },
              loc: { start: 430, end: 436 },
            },
            loc: { start: 430, end: 437 },
          },
          directives: [],
          loc: { start: 420, end: 437 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 440, end: 448 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 450, end: 456 } },
              loc: { start: 450, end: 456 },
            },
            loc: { start: 450, end: 457 },
          },
          directives: [],
          loc: { start: 440, end: 457 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 460, end: 465 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 467, end: 473 } },
              loc: { start: 467, end: 473 },
            },
            loc: { start: 467, end: 474 },
          },
          directives: [],
          loc: { start: 460, end: 474 },
        },
      ],
      loc: { start: 346, end: 476 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'NormalUser', loc: { start: 483, end: 493 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 505, end: 509 } },
          loc: { start: 505, end: 509 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'User', loc: { start: 512, end: 516 } },
          loc: { start: 512, end: 516 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 521, end: 523 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 525, end: 527 } },
              loc: { start: 525, end: 527 },
            },
            loc: { start: 525, end: 528 },
          },
          directives: [],
          loc: { start: 521, end: 528 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 531, end: 540 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 542, end: 548 } },
              loc: { start: 542, end: 548 },
            },
            loc: { start: 542, end: 549 },
          },
          directives: [],
          loc: { start: 531, end: 549 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 552, end: 560 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 562, end: 568 } },
              loc: { start: 562, end: 568 },
            },
            loc: { start: 562, end: 569 },
          },
          directives: [],
          loc: { start: 552, end: 569 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 572, end: 580 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 582, end: 588 } },
              loc: { start: 582, end: 588 },
            },
            loc: { start: 582, end: 589 },
          },
          directives: [],
          loc: { start: 572, end: 589 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 592, end: 597 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 599, end: 605 } },
              loc: { start: 599, end: 605 },
            },
            loc: { start: 599, end: 606 },
          },
          directives: [],
          loc: { start: 592, end: 606 },
        },
      ],
      loc: { start: 478, end: 608 },
    },
  ],
  loc: { start: 0, end: 609 },
} as unknown as DocumentNode
