use serde::{Deserialize, Serialize};

#[derive(Clone, Serialize, Deserialize)]
pub struct PreGamePayload {
    pub game_id: String,
    pub team_dog_id: String,
    pub dog_ids: Vec<String>,
    pub team_wolf_id: String,
    pub wolf_ids: Vec<String>,
    pub held_at: String,
}
