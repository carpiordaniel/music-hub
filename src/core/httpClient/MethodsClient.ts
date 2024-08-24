import { AxiosError, AxiosResponse } from "axios";
import { axiosClient } from "./AxiosClient";
import { useBaseStorage } from "hooks/useBaseStorage";

const { GetData } = useBaseStorage();
export const userInfo = GetData<string>("token");

export const Get = async <T extends unknown>(
    endpoint: string,
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    // setIsLoading(true);
    if (authorized) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${userInfo}`;
            return config;
        });
    }
    return await axiosClient.get(endpoint, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
};

export const Post = async <T extends unknown>(
    endpoint: string,
    data?: object,
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    // setIsLoading(true);
    if (authorized && userInfo) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${userInfo}`;
            return config;
        });
    }
    return await axiosClient.post(endpoint, data, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.log(JSON.stringify(error, null, 3));
            throw error;
        })
        .finally(() => {
            // setIsLoading(false);
        });
};

export const Put = async <T extends unknown>(
    endpoint: string,
    data?: object,
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    // setIsLoading(true);
    if (authorized && userInfo) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${userInfo}`;
            return config;
        });
    }
    return await axiosClient.put(endpoint, data, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
        .finally(() => {
            // setIsLoading(false);
        });
};

export const Delete = async <T extends unknown>(
    endpoint: string,
    id: string | number,
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    // setIsLoading(true);
    if (authorized) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${userInfo}`;
            return config;
        });
    }

    return await axiosClient.delete(endpoint + `${id}`, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
        .finally(() => {
            // setIsLoading(false);
        });
};
