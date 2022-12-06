export class ServiceResponse<T>{
    data?: T;
    success: boolean = true;
    message: string = "";
}