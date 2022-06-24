import { gql } from "graphql-request";

export const query_groupInfo = gql`
  query groupInfo($id: Uid!) {
    groupInfo(id: $id) {
      id
      joined
      threadId
    }
  }
`