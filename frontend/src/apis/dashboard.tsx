import axiosInstance from "./index";

export const getDashboardData = async () => {
    try{
        const response = await axiosInstance.get('/dashboard');
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error getting dashboard data:', error);
        throw error;
    }
}
