import { PlanetStarwars } from '../PlanetStarwars';
import { PlanetToSpanish } from './PlanetToSpanish';

export function mapToSpanishAttributes(data: PlanetStarwars): PlanetToSpanish {
    return {
        nombre: data.name,
        periodo_rotacion: data.rotation_period,
        periodo_orbital: data.orbital_period,
        diametro: data.diameter,
        clima: data.climate,
        gravedad: data.gravity,
        terreno: data.terrain,
        agua_superficie: data.surface_water,
        poblacion: data.population,
        residentes: data.residents,
        peliculas: data.films,
        creado: data.created,
        editado: data.edited,
        url: data.url
    };
}
