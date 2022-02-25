import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Vehicle from '~db/models/Vehicle.model';
import { getSuccessResponse } from '~helpers/getSuccessResponse.helper';

export const getVehicles = async (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json(getSuccessResponse({ result: [] }));
};

export const getVehicle = async (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json(getSuccessResponse({ result: [] }));
};

export const createVehicle = async (req: Request, res: Response) => {
  const vehicle = new Vehicle(req.body);

  await vehicle.save();

  res.status(StatusCodes.OK).json(getSuccessResponse({ result: vehicle }));
};

export const updateVehicle = async (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json(getSuccessResponse({ result: [] }));
};

export const deleteVehicle = async (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json(getSuccessResponse({ result: [] }));
};
