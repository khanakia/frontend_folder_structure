import { useQuery } from "react-query";
import { query_groupInfo } from "../schema/group"
import { getGqlClient } from "src/lib/gqlClient"

export function useQueryGroupInfo(variables: {id: string}) {
  return useQuery(["groupInfo", variables], async (ctx) => {
    // if (!ctx.queryKey[1]['slug']) return
    // console.log(ctx.queryKey)
    const {
      groupInfo: data,
    } = await getGqlClient().request(
      query_groupInfo,
      ctx.queryKey[1]
    );
    return data as any;
  }, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });
}
