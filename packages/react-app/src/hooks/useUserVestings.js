import { gql, useQuery } from "@apollo/client";

const USER_VESTINGS_QUERY = gql`
  query UserVestings($recipient: Bytes!) {
    vestings(where: { recipient: $recipient }) {
      id
      token {
        id
        name
        symbol
        decimals
        underlying {
          id
          name
          symbol
          decimals
        }
        startTimestamp
        endTimestamp
      }
      createdAt
      recipient
      underlyingAmount
      claimedUnderlyingAmount
      wrappedTokenAmount
    }
  }
`;

export default function useUserVestings(account) {
  return useQuery(USER_VESTINGS_QUERY, { pollInterval: 2500, variables: { recipient: account } });
}
