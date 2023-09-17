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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PageInfo', loc: { start: 62, end: 70 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'hasNextPage', loc: { start: 75, end: 86 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 88, end: 95 } },
              loc: { start: 88, end: 95 },
            },
            loc: { start: 88, end: 96 },
          },
          directives: [],
          loc: { start: 75, end: 96 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'hasPreviousPage', loc: { start: 99, end: 114 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 116, end: 123 } },
              loc: { start: 116, end: 123 },
            },
            loc: { start: 116, end: 124 },
          },
          directives: [],
          loc: { start: 99, end: 124 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'startCursor', loc: { start: 127, end: 138 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 140, end: 146 } },
            loc: { start: 140, end: 146 },
          },
          directives: [],
          loc: { start: 127, end: 146 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'endCursor', loc: { start: 149, end: 158 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 160, end: 166 } },
            loc: { start: 160, end: 166 },
          },
          directives: [],
          loc: { start: 149, end: 166 },
        },
      ],
      loc: { start: 57, end: 168 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Post', loc: { start: 174, end: 178 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 190, end: 194 } },
          loc: { start: 190, end: 194 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 199, end: 201 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 203, end: 205 } },
              loc: { start: 203, end: 205 },
            },
            loc: { start: 203, end: 206 },
          },
          directives: [],
          loc: { start: 199, end: 206 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 209, end: 214 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 216, end: 222 } },
              loc: { start: 216, end: 222 },
            },
            loc: { start: 216, end: 223 },
          },
          directives: [],
          loc: { start: 209, end: 223 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'body', loc: { start: 226, end: 230 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 232, end: 238 } },
              loc: { start: 232, end: 238 },
            },
            loc: { start: 232, end: 239 },
          },
          directives: [],
          loc: { start: 226, end: 239 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'author', loc: { start: 242, end: 248 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'User', loc: { start: 250, end: 254 } },
              loc: { start: 250, end: 254 },
            },
            loc: { start: 250, end: 255 },
          },
          directives: [],
          loc: { start: 242, end: 255 },
        },
      ],
      loc: { start: 169, end: 257 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PostConnection', loc: { start: 264, end: 278 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'edges', loc: { start: 283, end: 288 } },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PostEdge', loc: { start: 291, end: 299 } },
              loc: { start: 291, end: 299 },
            },
            loc: { start: 290, end: 300 },
          },
          directives: [],
          loc: { start: 283, end: 300 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'nodes', loc: { start: 303, end: 308 } },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Post', loc: { start: 311, end: 315 } },
              loc: { start: 311, end: 315 },
            },
            loc: { start: 310, end: 316 },
          },
          directives: [],
          loc: { start: 303, end: 316 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pageInfo', loc: { start: 319, end: 327 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PageInfo', loc: { start: 329, end: 337 } },
              loc: { start: 329, end: 337 },
            },
            loc: { start: 329, end: 338 },
          },
          directives: [],
          loc: { start: 319, end: 338 },
        },
      ],
      loc: { start: 259, end: 340 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PostEdge', loc: { start: 347, end: 355 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'node', loc: { start: 360, end: 364 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Post', loc: { start: 366, end: 370 } },
              loc: { start: 366, end: 370 },
            },
            loc: { start: 366, end: 371 },
          },
          directives: [],
          loc: { start: 360, end: 371 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cursor', loc: { start: 374, end: 380 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 382, end: 388 } },
              loc: { start: 382, end: 388 },
            },
            loc: { start: 382, end: 389 },
          },
          directives: [],
          loc: { start: 374, end: 389 },
        },
      ],
      loc: { start: 342, end: 391 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 405, end: 410 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'posts', loc: { start: 415, end: 420 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'first', loc: { start: 421, end: 426 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Int', loc: { start: 428, end: 431 } },
                loc: { start: 428, end: 431 },
              },
              directives: [],
              loc: { start: 421, end: 431 },
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'after', loc: { start: 433, end: 438 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'String', loc: { start: 440, end: 446 } },
                loc: { start: 440, end: 446 },
              },
              directives: [],
              loc: { start: 433, end: 446 },
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'last', loc: { start: 448, end: 452 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Int', loc: { start: 454, end: 457 } },
                loc: { start: 454, end: 457 },
              },
              directives: [],
              loc: { start: 448, end: 457 },
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'before', loc: { start: 459, end: 465 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'String', loc: { start: 467, end: 473 } },
                loc: { start: 467, end: 473 },
              },
              directives: [],
              loc: { start: 459, end: 473 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PostConnection', loc: { start: 476, end: 490 } },
              loc: { start: 476, end: 490 },
            },
            loc: { start: 476, end: 491 },
          },
          directives: [],
          loc: { start: 415, end: 491 },
        },
      ],
      loc: { start: 393, end: 493 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 504, end: 508 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Node', loc: { start: 520, end: 524 } },
          loc: { start: 520, end: 524 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 529, end: 531 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 533, end: 535 } },
              loc: { start: 533, end: 535 },
            },
            loc: { start: 533, end: 536 },
          },
          directives: [],
          loc: { start: 529, end: 536 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 539, end: 548 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 550, end: 556 } },
              loc: { start: 550, end: 556 },
            },
            loc: { start: 550, end: 557 },
          },
          directives: [],
          loc: { start: 539, end: 557 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 560, end: 568 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 570, end: 576 } },
              loc: { start: 570, end: 576 },
            },
            loc: { start: 570, end: 577 },
          },
          directives: [],
          loc: { start: 560, end: 577 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 580, end: 588 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 590, end: 596 } },
              loc: { start: 590, end: 596 },
            },
            loc: { start: 590, end: 597 },
          },
          directives: [],
          loc: { start: 580, end: 597 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 600, end: 605 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 607, end: 613 } },
              loc: { start: 607, end: 613 },
            },
            loc: { start: 607, end: 614 },
          },
          directives: [],
          loc: { start: 600, end: 614 },
        },
      ],
      loc: { start: 494, end: 616 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MemberUser', loc: { start: 623, end: 633 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'User', loc: { start: 645, end: 649 } },
          loc: { start: 645, end: 649 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 654, end: 656 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 658, end: 660 } },
              loc: { start: 658, end: 660 },
            },
            loc: { start: 658, end: 661 },
          },
          directives: [],
          loc: { start: 654, end: 661 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 664, end: 673 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 675, end: 681 } },
              loc: { start: 675, end: 681 },
            },
            loc: { start: 675, end: 682 },
          },
          directives: [],
          loc: { start: 664, end: 682 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 685, end: 693 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 695, end: 701 } },
              loc: { start: 695, end: 701 },
            },
            loc: { start: 695, end: 702 },
          },
          directives: [],
          loc: { start: 685, end: 702 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 705, end: 713 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 715, end: 721 } },
              loc: { start: 715, end: 721 },
            },
            loc: { start: 715, end: 722 },
          },
          directives: [],
          loc: { start: 705, end: 722 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 725, end: 730 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 732, end: 738 } },
              loc: { start: 732, end: 738 },
            },
            loc: { start: 732, end: 739 },
          },
          directives: [],
          loc: { start: 725, end: 739 },
        },
      ],
      loc: { start: 618, end: 741 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'NormalUser', loc: { start: 748, end: 758 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'User', loc: { start: 770, end: 774 } },
          loc: { start: 770, end: 774 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 779, end: 781 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 783, end: 785 } },
              loc: { start: 783, end: 785 },
            },
            loc: { start: 783, end: 786 },
          },
          directives: [],
          loc: { start: 779, end: 786 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'firstName', loc: { start: 789, end: 798 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 800, end: 806 } },
              loc: { start: 800, end: 806 },
            },
            loc: { start: 800, end: 807 },
          },
          directives: [],
          loc: { start: 789, end: 807 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'lastName', loc: { start: 810, end: 818 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 820, end: 826 } },
              loc: { start: 820, end: 826 },
            },
            loc: { start: 820, end: 827 },
          },
          directives: [],
          loc: { start: 810, end: 827 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 830, end: 838 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 840, end: 846 } },
              loc: { start: 840, end: 846 },
            },
            loc: { start: 840, end: 847 },
          },
          directives: [],
          loc: { start: 830, end: 847 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 850, end: 855 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 857, end: 863 } },
              loc: { start: 857, end: 863 },
            },
            loc: { start: 857, end: 864 },
          },
          directives: [],
          loc: { start: 850, end: 864 },
        },
      ],
      loc: { start: 743, end: 866 },
    },
  ],
  loc: { start: 0, end: 867 },
} as unknown as DocumentNode
