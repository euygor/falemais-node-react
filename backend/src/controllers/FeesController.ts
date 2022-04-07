import { Request, Response } from "express";
import { fees } from "../data/fees";

export const get = async (request: Request, response: Response) => {
    return response.json(fees);
}