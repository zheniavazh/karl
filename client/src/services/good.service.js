import httpService from "./http.service";

const goodEndpoint = "good/";

const goodService = {
    get: async () => {
        const { data } = await httpService.get(goodEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(goodEndpoint, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            goodEndpoint + payload._id,
            payload
        );
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(
            goodEndpoint + payload._id,
            payload
        );
        return data;
    },
};

export default goodService;
