use crate::models::{
    common::value_objects::{score::Score, team_id::TeamId, team_name::TeamName},
    player::player_entity::Player,
};

use anyhow::Result;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Team {
    pub id: TeamId,
    pub name: TeamName,
    pub total_score: Score,
    pub members: Vec<Player>,
}

impl Team {
    pub fn new(
        id: TeamId,
        name: TeamName,
        total_score: Score,
        members: Vec<Player>,
    ) -> Result<Self> {
        Ok(Self {
            id,
            name,
            total_score,
            members,
        })
    }
}
