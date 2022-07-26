import { Request, Response, NextFunction } from "express";

export const requestUrl = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log(request.url);
    next();
};


export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let statusCode: number, message: string;

    switch(error.message){
        default:
            statusCode = 500;
            message = '服务暂时出了点问题～～';
            break;

    }

    response.status(statusCode).send({message})
};