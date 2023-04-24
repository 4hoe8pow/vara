use serde::{self, Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ScorePayload {
    pub team: String,
    pub point: u8,
}
