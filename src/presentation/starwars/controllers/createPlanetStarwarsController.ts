import { Request, Response } from "express";
import { CreatePlanetUseCase } from "../../../application/CreateCharacterUseCase";
import { PlanetRepositoryImpl } from "../../../infrastructure/PlanetRepositoryImp";
import { dynamoDbClient } from "../../../infrastructure/DynamoDbClient";



export async function createPlanetController(
  req: Request,
  res: Response
): Promise<void> {
  const planetRepository = new PlanetRepositoryImpl(dynamoDbClient);
  const createPlanetUseCase = new CreatePlanetUseCase(planetRepository);

  try {
    const result = await createPlanetUseCase.execute(req.body);
    res.status(201).json({
      message : "Se inserto Correctamente",
      status : 200,
      result
    });
  } catch (error) {
    
    res.status(500).json({
      message : "Error al crear el planeta",
      status : 500,
      result : null
    });
  }
}
