import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { PlanetStarwars } from "../domain/PlanetStarwars";
import { PlanetStarwarsRepository } from "../domain/repository/PlanetStarwarsRepository";
import { v4 as uuidv4 } from 'uuid';
import { PlanetToSpanish } from "../domain/mapper/PlanetToSpanish";
import { mapToSpanishAttributes } from "../domain/mapper/mapToSpanishAttributes";

export class PlanetRepositoryImpl implements PlanetStarwarsRepository {

    private readonly tableName =  "planet";

    constructor(private dynamoDbClient: DynamoDBClient) {}

    async save(data: PlanetStarwars): Promise<PlanetToSpanish> {
        const item = {
            id_planet  : {S: uuidv4() },
            name:            { S: data.name },
            rotation_period: { S: data.rotation_period },
            orbital_period:  { S: data.orbital_period },
            diameter:        { S: data.diameter },
            climate:         { S: data.climate },
            gravity:         { S: data.gravity },
            terrain:         { S: data.terrain },
            surface_water:   { S: data.surface_water },
            population:      { S: data.population },
            residents:       { L: data.residents.map(resident => ({ S: resident })) },
            films:           { L: data.films.map(film => ({ S: film })) },
            created:         { S: data.created.toString() },
            edited:          { S: data.edited.toString() },
            url:             { S: data.url }
        };

           
        const command = new PutItemCommand({
            TableName: this.tableName,
            Item: item,
        });

        try {
            await this.dynamoDbClient.send(command);
            console.log("Item saved successfully.");
        } catch (error) {
            console.log(error)
            console.error("Error saving item:", error);
            throw error; 
        }

        return mapToSpanishAttributes(data);
    }
}
