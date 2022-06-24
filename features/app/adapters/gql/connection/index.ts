import { GraphQLClient, gql } from 'graphql-request'
import { getToken, getTokenName } from '../components/organisms/Auth/auth'
const endpoint = process.env.NEXT_PUBLIC_EVENT_API_HOST + '/query'
import Cookies from 'cookies'

let gqlOptions: any = {
  credentials: 'include',
  mode: 'cors',
  headers: {
    // authorization: 'Bearer MY_TOKEN',
  },
}

export const getGqlClient = () => {
  if(getToken()) {
    gqlOptions['headers']['token'] = getToken()
  }

  return new GraphQLClient(endpoint, gqlOptions)
}