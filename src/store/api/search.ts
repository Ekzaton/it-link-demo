import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Item } from "@/types/common";

export const search = createApi({
    reducerPath: "search",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
    endpoints: (builder) => ({
        getSearchResults: builder.query<Item[], { q: string, t: string }>({
            query: ({q, t}) => `search?query=${q}&type=${t}`,
        }),
    }),
});

export const { useGetSearchResultsQuery } = search;
