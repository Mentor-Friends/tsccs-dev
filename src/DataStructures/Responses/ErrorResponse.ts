import { BaseUrl } from "../BaseUrl";
import { FreeschemaResponse } from "./StandardResponses";

/**
 * This is a class that is used to standardize the Response that is sent by FreeSchema.
 * This is done so that we do not have to send a HttpResponse codes.
 */
export class FreeSchemaResponse{
    private message: string
    private status: number
    private data: any
    private ok: boolean
    private url: string = BaseUrl.BASE_URL;


    /**
     * 
     * @param message this is the message for the response
     * @param ok  this is the status can be true or false boolean in case that request succeds or fails
     * @param status this is the standard http codes 200 for ok, 500 for internal error etc.
     * @param data  this is the standard data that can be anything.
     */
    constructor(message: string, ok:boolean, status: number, data: any ){
        this.message = message;
        this.ok = ok;
        this.status = status;
        this.data = data;
    }


    /**
     * This function gets the message of the error
     * @returns 
     */
    public getMessage(): string{
        return this.message;
    }

    /**
     * 
     * @param message This allows you to set a message variable in the FreeSchemaResponse
     * @returns 
     */
    public setMessage(message: string): FreeSchemaResponse{
        this.message = message;
        return this;
    }

    /**
     * 
     * @returns status code of the FreeSchemaResponse
     */
    public getStatus(): number{
        return this.status;
    }


    /**
     * 
     * @param status standard http error codes (200 ok , 401 unauthorized, 500 internal server error etc.)
     * @returns 
     */
    public setStatus(status: number): FreeSchemaResponse{
        this.status = status;
        return this;
    }

    /**
     * 
     * @returns returns the data for the request
     */
    public getData(): any{
        return this.data;
    }


    /**
     * 
     * @param data any type of data can be given here
     * @returns FreeSchemaReponse
     */
    public setData(data: any): FreeSchemaResponse{
        this.data = data;
        return this;
    }

    /**
     * 
     * @returns the status of the FreeSchemaReponse (either true or false)
     */
    public getOk(): boolean{
        return this.ok;
    }

    /**
     * 
     * @param status if the status is true then the response was successful else the success was not achieved.
     * @returns returns the FreeSchemaResponse
     */
    public setOk(ok: boolean): FreeSchemaResponse{
        this.ok = ok;
        return this;
    }

    /**
     * 
     * @returns the url that caused the error
     */
    public getUrl(){
        return this.url;
    }

    /**
     * 
     * @param url the url from which the error or response originates
     * @returns FreeSchemaResponse
     */
    public setUrl(url: string): FreeSchemaResponse{
        this.url = url;
        return this;
    }




}