import { mockData } from "../../public/dummyData";

export const getFeaturedAds = (): Promise<any[]> => {
    return new Promise((resolve, reject)=>{
        let success = true;

        setTimeout(()=>{
            if(success){
                resolve(mockData);
            }else{
                reject("Failed to fetch featured ads");
            }
        }, 4000)
    })
}