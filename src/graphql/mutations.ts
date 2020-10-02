/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHello = /* GraphQL */ `
  mutation CreateHello(
    $input: CreateHelloInput!
    $condition: ModelHelloConditionInput
  ) {
    createHello(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateHello = /* GraphQL */ `
  mutation UpdateHello(
    $input: UpdateHelloInput!
    $condition: ModelHelloConditionInput
  ) {
    updateHello(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteHello = /* GraphQL */ `
  mutation DeleteHello(
    $input: DeleteHelloInput!
    $condition: ModelHelloConditionInput
  ) {
    deleteHello(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
