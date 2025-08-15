import { GetImageApi } from "../../Api/Images/GetImages";
import { BaseUrl } from "../../app";

/**
 * 
 * @param url this is the url of the image that you have. This image will be cached in the cache server
 * @param format this is the format it can be either normal , small, by default it is normal
 * @returns 
 */
export async function GetFreeschemaImage(url: string, format:string="normal"){
    let image:any;
    const parts = url.split('/');
    let lastPart = parts.pop(); 
    if(format == "small"){
        let version_split = lastPart?.split('.');
        if(version_split){
            let name = version_split[0];
            let extension = version_split[1];
            lastPart = name + "_small." + extension; 

        }

    }
    console.log("this is the filename", lastPart);
    if(lastPart){
        image = await GetImageApi(lastPart);

    }
    return image;

    
}


/**
 * 
 * @param url this is the url of the image that you have. This image will be cached in the cache server
 * @param format this is the format it can be either normal , small, by default it is normal
 * @returns 
 */
export function GetFreeschemaImageUrl(url: string, format:string="normal"){
    let updatedUrl:string = url;
    try{

        if(url){
        const parts = url.split('/');
            let lastPart = parts.pop(); 
            if(format == "small"){
                let version_split = lastPart?.split('.');
                if(version_split){
                    let name = version_split[0];
                    let extension = version_split[1];
                    lastPart = name + "_small." + extension; 

                }

            }
            console.log("this is the filename", lastPart);
            if(lastPart){
                updatedUrl = BaseUrl.GetCachedImage(lastPart)

            }
        }
    }
    catch(ex){
        console.log("This url has error", url);
    }
    return updatedUrl;



    
}
