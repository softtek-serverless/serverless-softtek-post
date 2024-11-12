import { PlanetToSpanish } from "../mapper/PlanetToSpanish";
import { PlanetStarwars } from "../PlanetStarwars";

export interface PlanetStarwarsRepository {
    save(data: PlanetStarwars): Promise<PlanetToSpanish>;
}
