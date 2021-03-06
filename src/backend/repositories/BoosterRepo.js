import { Booster } from "../models/Booster.js";
import pool from "./pool.js";

export async function findAllForPlayer(playerId) {
    try {
        const result = await pool.query(
            `SELECT * FROM boosters
            WHERE player_id = $1`,
            [playerId]
        );
        return Booster.createManyFromDb(result.rows);
    } catch (error) {
        throw error;
    }
}
