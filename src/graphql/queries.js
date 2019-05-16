// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTacoStand = `query GetTacoStand($id: ID!) {
  getTacoStand(id: $id) {
    id
    name
    description
    location
    rating
  }
}
`;
export const listTacoStands = `query ListTacoStands(
  $filter: ModelTacoStandFilterInput
  $limit: Int
  $nextToken: String
) {
  listTacoStands(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      location
      rating
    }
    nextToken
  }
}
`;
