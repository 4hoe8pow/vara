use serde::{self, Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResultPayload {
    pub id: String,
    pub winner: String,
    pub loser: String,
    pub winner_score: u8,
    pub loser_score: u8,
    pub held_at: String,
}
