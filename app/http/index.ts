import { Inventory } from "@/app/models/inventory";
import { API_HOST, API_KEY } from "@/app/app-config";
import { Base, Filters } from "@/app/models/base";

export async function getInventories(filter?: string): Promise<Inventory[]> {
    const query = new URLSearchParams(filter).toString();
    const response = await fetch(`${API_HOST}list?${query}`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();

}

export async function getFilters(): Promise<Filters[]> {
    const response = await fetch(`${API_HOST}filter/all`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}


export async function getFilters(): Promise<Filters[]> {
    const response = await fetch(`${API_HOST}filter/all`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}
