import { StarWarsApiClient } from './../infrastructure/StarWarsApiClient';
import { PlanetStarwars } from '../domain/PlanetStarwars';
import { PlanetStarwarsRepository } from '../domain/repository/PlanetStarwarsRepository';
import { PlanetToSpanish } from '../domain/mapper/PlanetToSpanish';

export class CreatePlanetUseCase {
    constructor(private readonly planetRepository: PlanetStarwarsRepository) {}

    async execute(data: any): Promise<PlanetToSpanish> {
        //const planetId = parseInt(event.pathParameters?.id || "1");
            const starWarsApiClient = new StarWarsApiClient();
            const { id  } = data

            const planetData  = await starWarsApiClient.getPlanet(+id);
            
            return await this.planetRepository.save(planetData);
    
           

    }

   
}
