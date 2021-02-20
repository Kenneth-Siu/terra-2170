import { Player } from "../models/Player.js";
import pool from "./pool.js";

export function create(userId, draftId) {
    return pool
        .query("INSERT INTO players(userId, draftId) VALUES ($1, $2) RETURNING *", [userId, draftId])
        .then((result) => {
            return Player.createFromDb(result.rows[0]);
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
}

export function createManyForDraft(userIds, draftId) {
    return pool
        .query(
            `INSERT INTO players (userId, draftId)
            VALUES ${userIds.map((_, index) => `($${index + 2}, $1)`).join(", ")}
            RETURNING *;`,
            [draftId, ...userIds]
        )
        .then((result) => {
            return result.rows.map((row) => Player.createFromDb(row));
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
}

export function find(userId, draftId) {
    return pool
        .query("SELECT * FROM players WHERE userId = $1 AND draftId = $2", [userId, draftId])
        .then((result) => {
            if (result.rows.length) {
                return Player.createFromDb(result.rows[0]);
            } else {
                return null;
            }
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
}

export function findAllForUser(userId) {
    return pool
        .query("SELECT * FROM players WHERE userId = $1", [userId])
        .then((result) => {
            return result.rows.map((row) => Player.createFromDb(row));
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
}