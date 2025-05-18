import axiosInstance from "./index";

export const login = async (payload: any) => {
    try{
        const response = await axiosInstance.post('/login', payload);
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const logout = async () => {
    try{
        const response = await axiosInstance.post('/logout')
        if(response.status == 200){
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}