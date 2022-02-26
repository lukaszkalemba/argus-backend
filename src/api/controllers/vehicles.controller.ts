import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Vehicle from '~db/models/Vehicle.model';
import { getSuccessResponse } from '~helpers/getSuccessResponse.helper';

export const getVehicles = async (_: Request, res: Response) => {
  const vehicles = await Vehicle.find();

  res.status(StatusCodes.OK).json(getSuccessResponse({ result: vehicles }));
};

export const getVehicle = async (req: Request, res: Response) => {
  const vehicle = await Vehicle.findOne({ _id: req.params.id });

  res.status(StatusCodes.OK).json(getSuccessResponse({ result: vehicle }));
};

export const createVehicle = async (req: Request, res: Response) => {
  const vehicle = new Vehicle(req.body);

  await vehicle.save();

  res.status(StatusCodes.OK).json(getSuccessResponse({ result: vehicle }));
};

export const updateVehicle = async (req: Request, res: Response) => {
  const vehicle = await Vehicle.findOneAndUpdate(
    { _id: req.params.id },
    {
      ...req.body,
      lastConnection: Date.now(),
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json(getSuccessResponse({ result: vehicle }));
};

export const deleteVehicle = async (req: Request, res: Response) => {
  await Vehicle.findOneAndRemove({ _id: req.params.id });

  res.sendStatus(StatusCodes.NO_CONTENT);
};
