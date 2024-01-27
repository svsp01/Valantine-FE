import axios from '../axios';

export const CreateUser = async (credentials: any) => {
    try {
        const response: any = await axios.post(`/users`, credentials)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserQuestions = async () => {
    try {
        const response: any = await axios.get(`/userquestions`)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const answerById = async (id: string, data: any)=>{
    try {
        const response: any = await axios.post(`/useranswers/${id}`, data)
        return response.data;
    } catch (error) {
        throw error;
    }
}

