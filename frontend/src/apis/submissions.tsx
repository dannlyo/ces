import axiosInstance from "./index";

export const submitComplaint = async (data: any) => {
    try{
        const response = await axiosInstance.post('/submissions', data);
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};

export const getSubmissions = async () => {
    try{
        const response = await axiosInstance.get('/submissions');
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error getting submissions:', error);
        throw error;
    }
};