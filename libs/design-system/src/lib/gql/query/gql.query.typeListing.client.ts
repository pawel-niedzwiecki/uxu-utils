import { gql } from '@apollo/client';

export const GET_TYPE_LISTING = gql`
  query GetTypeListing {
    typeListing @client
  }
`;
