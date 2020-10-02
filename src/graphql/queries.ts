/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHello = /* GraphQL */ `
  query GetHello($id: ID!) {
    getHello(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listHellos = /* GraphQL */ `
  query ListHellos(
    $filter: ModelHelloFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHellos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
