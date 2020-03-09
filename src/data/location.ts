import { fetchData } from "@/util/fetchutil";
import { createModel } from "./struct/Model";
import Config from "@/config";
import Location from "./models/Location";
import Value from "./models/Value";

/**
 * Get a location by its secret id
 * @param secretId Secret id of the location.
 */
export function getLocation(secretId: string): Promise<Location> {
    return fetchData<Location>({
        url: `${Config.BACKEND.URL}${Config.BACKEND.ENDPOINTS.LOCATIONS}/${secretId}`,
        create: createModel(Location),
        method: "GET"
    });
}

export function getLocations(): Promise<Array<Location>> {
    return fetchData<Array<Location>>({
        url: `${Config.BACKEND.URL}${Config.BACKEND.ENDPOINTS.LOCATIONS}`,
        create: createModel(Location),
        method: "GET"
    });
}

export class LocationCreate {
    public name: string;
    public description: string;
    public listed: boolean;
}

/**
 * Create a new location.
 * @param locationCreate Location parameters for the new location.
 */
export function createLocation(locationCreate: LocationCreate): Promise<Value> {
    return fetchData<Value>({
        url: `${Config.BACKEND.URL}${Config.BACKEND.ENDPOINTS.LOCATIONS}`,
        create: createModel(Value),
        method: "POST",
        options: {
            data: locationCreate
        }
    });
}
