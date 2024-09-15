/**
 * This is a class that is used to standardize the Response that is sent by FreeSchema.
 * This is done so that we do not have to send a HttpResponse codes.
 */
export class FreeSchemaResponse{
    private _message: string
    private _status: boolean
    private _statusCode: number
    private _data: any

    constructor(message: string, status:boolean, statusCode: number, data: any ){
        this._message = message;
        this._status = status;
        this._statusCode = statusCode;
        this._data = data;
    }

    /**
     * This function gets the message of the error
     * @returns 
     */
    public getMessage(): string{
        return this._message;
    }

    /**
     * 
     * @param message This allows you to set a message variable in the FreeSchemaResponse
     * @returns 
     */
    public setMessage(message: string): FreeSchemaResponse{
        this._message = message;
        return this;
    }

    /**
     * 
     * @returns status code of the FreeSchemaResponse
     */
    public getStatusCode(): number{
        return this._statusCode;
    }


    /**
     * 
     * @param statusCode standard http error codes (200 ok , 401 unauthorized, 500 internal server error etc.)
     * @returns 
     */
    public setStatusCode(statusCode: number): FreeSchemaResponse{
        this._statusCode = statusCode;
        return this;
    }

    /**
     * 
     * @returns returns the data for the request
     */
    public getData(): any{
        return this._data;
    }


    /**
     * 
     * @param data any type of data can be given here
     * @returns FreeSchemaReponse
     */
    public setData(data: any): FreeSchemaResponse{
        this._data = data;
        return this;
    }

    /**
     * 
     * @returns the status of the FreeSchemaReponse (either true or false)
     */
    public getStatus(): boolean{
        return this._status;
    }

    /**
     * 
     * @param status if the status is true then the response was successful else the success was not achieved.
     * @returns returns the FreeSchemaResponse
     */
    public setStatus(status: boolean): FreeSchemaResponse{
        this._status = status;
        return this;
    }




}