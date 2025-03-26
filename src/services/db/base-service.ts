import { Container, Item, Resource } from "@azure/cosmos";
import { ApiError } from "../api-client";

export class BaseDatabaseService<T extends Resource> {
  constructor(protected container: Container) {}

  async create(item: Omit<T, "id">): Promise<T> {
    try {
      const { resource } = await this.container.items.create(item);
      return resource as T;
    } catch (error) {
      throw new ApiError("Failed to create item", 500, error);
    }
  }

  async get(id: string): Promise<T> {
    try {
      const { resource } = await this.container.item(id, id).read();
      if (!resource) {
        throw new ApiError("Item not found", 404);
      }
      return resource as T;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError("Failed to get item", 500, error);
    }
  }

  async list(query: string = "SELECT * FROM c"): Promise<T[]> {
    try {
      const { resources } = await this.container.items.query(query).fetchAll();
      return resources as T[];
    } catch (error) {
      throw new ApiError("Failed to list items", 500, error);
    }
  }

  async update(id: string, item: Partial<T>): Promise<T> {
    try {
      const { resource } = await this.container.item(id, id).replace(item);
      return resource as T;
    } catch (error) {
      throw new ApiError("Failed to update item", 500, error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.container.item(id, id).delete();
    } catch (error) {
      throw new ApiError("Failed to delete item", 500, error);
    }
  }

  protected async query<T>(query: string, parameters: any[] = []): Promise<T[]> {
    try {
      const { resources } = await this.container.items
        .query({
          query,
          parameters,
        })
        .fetchAll();
      return resources as T[];
    } catch (error) {
      throw new ApiError("Failed to execute query", 500, error);
    }
  }
}
