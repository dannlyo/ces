import axiosInstance from "./index";

export const getSiteInfo = async () => {
    try{
        const response = await axiosInstance.get('/site-info');
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error getting site info:', error);
        throw error;
    }
};