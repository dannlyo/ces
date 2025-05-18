import axiosInstance from "./index";

export const getAgencies = async () => {
    try{
        const response = await axiosInstance.get('/agencies');
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error getting agencies:', error);
        throw error;
    }
};