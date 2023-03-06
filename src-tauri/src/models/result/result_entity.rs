use chrono::NaiveDate;

use crate::models::common::value_objects::{game_id::GameId, score::Score, team_id::TeamId};

pub struct Result {
    pub id: GameId,
    pub winner: TeamId,
    pub loser: TeamId,
    pub winner_score: Score,
    pub loser_score: Score,
    pub held_at: NaiveDate,
}

