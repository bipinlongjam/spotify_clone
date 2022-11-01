import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
    baseUrl:'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders:(headers) =>{
        headers.set('X-RapidAPI-Key', '42ded5fbcbmsh15947e5df7a6e86p1e3055jsn74664ce677ca');
    return headers;
    },
}),
endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/world'}),
    // getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
}),
})

export const {
    useGetTopChartsQuery,
    // useGetSongDetailsQuery,
} = shazamCoreApi;