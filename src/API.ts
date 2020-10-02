/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHelloInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelHelloConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelHelloConditionInput | null > | null,
  or?: Array< ModelHelloConditionInput | null > | null,
  not?: ModelHelloConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateHelloInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteHelloInput = {
  id?: string | null,
};

export type ModelHelloFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelHelloFilterInput | null > | null,
  or?: Array< ModelHelloFilterInput | null > | null,
  not?: ModelHelloFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateHelloMutationVariables = {
  input: CreateHelloInput,
  condition?: ModelHelloConditionInput | null,
};

export type CreateHelloMutation = {
  createHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHelloMutationVariables = {
  input: UpdateHelloInput,
  condition?: ModelHelloConditionInput | null,
};

export type UpdateHelloMutation = {
  updateHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHelloMutationVariables = {
  input: DeleteHelloInput,
  condition?: ModelHelloConditionInput | null,
};

export type DeleteHelloMutation = {
  deleteHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetHelloQueryVariables = {
  id: string,
};

export type GetHelloQuery = {
  getHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHellosQueryVariables = {
  filter?: ModelHelloFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHellosQuery = {
  listHellos:  {
    __typename: "ModelHelloConnection",
    items:  Array< {
      __typename: "Hello",
      id: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateHelloSubscription = {
  onCreateHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHelloSubscription = {
  onUpdateHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHelloSubscription = {
  onDeleteHello:  {
    __typename: "Hello",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
