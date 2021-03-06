export const USER_MAX_OWNED_DRAFTS = 10;
export const DEFAULT_PLAYERS_IN_DRAFT = 8;
export const RARE_TO_MYTHIC_RATIO = 7;
export const RARES_IN_PACK = 1;
export const UNCOMMONS_IN_PACK = 3;
export const COMMONS_IN_PACK = 10;
export const CARDS_IN_PACK = RARES_IN_PACK + UNCOMMONS_IN_PACK + COMMONS_IN_PACK;

export const MYTHIC_RARITY = "M";
export const RARE_RARITY = "R";
export const UNCOMMON_RARITY = "U";
export const COMMON_RARITY = "C";

export const WHITE_COLOR = "W";
export const BLUE_COLOR = "U";
export const BLACK_COLOR = "B";
export const RED_COLOR = "R";
export const GREEN_COLOR = "G";
export const COLORLESS_COLOR = "";

export const CARD_GRADES = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

export const DRAFT_STATUSES = Object.freeze({
    0: "Ready to Start",
    READY_TO_START: 0,
    1: "In Progress",
    IN_PROGRESS: 1,
    2: "Complete",
    COMPLETE: 2,
});
