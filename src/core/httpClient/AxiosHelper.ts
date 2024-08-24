import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosException } from '../errors/exceptions';
import { axiosClient } from '../httpClient/AxiosClient';
import { useBaseStorage } from '../hooks/useBaseStorage';

const { GetData, RemoveData } = useBaseStorage();

export default class AxiosHelper {
    private static token: string;

    static async initialize() {
        AxiosHelper.token = GetData<string>('token');
    }

    static executeRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
        try {

            await AxiosHelper.initialize();

            if (AxiosHelper.token) {
                config.headers.Authorization = `Bearer ${AxiosHelper.token}`;
            }

            config.headers.Authorization = `Bearer ${AxiosHelper.token}`;
            const response: AxiosResponse<T> = await axiosClient(config);
            return response.data;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }

    static executeRequestWithoutType = async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
        try {
            await AxiosHelper.initialize();

            if (AxiosHelper.token) {
                config.headers.Authorization = `Bearer ${AxiosHelper.token}`;
            }

            config.headers.Authorization = `Bearer ${AxiosHelper.token}`;
            const response: AxiosResponse = await axiosClient(config);
            return response;

        } catch (error) {
            if (error.response?.status && error.response?.status == 401) {
                AxiosHelper.close();
            } else {
                throw new Error(AxiosException(error));
            }
        }
    }

    static close = () => {
        RemoveData('token');
        window.location.href = '/auth/iniciar-sesion/vista';
    }
}