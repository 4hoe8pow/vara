use anyhow::Result;

use crate::models::common::value_objects::{
    player_height::PlayerHeight, player_id::PlayerId, player_name::PlayerName,
    player_number::PlayerNumber, player_role::PlayerRole, player_status::PlayerStatus,
    player_weight::PlayerWeight,
};

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Player {
    pub id: PlayerId,
    pub name: PlayerName,
    pub role: PlayerRole,
    pub height: PlayerHeight,
    pub weight: PlayerWeight,
    pub number: PlayerNumber,
    pub status: PlayerStatus,
}

impl Player {
    pub fn new(
        _id: PlayerId,
        name: PlayerName,
        role: PlayerRole,
        height: PlayerHeight,
        weight: PlayerWeight,
        number: PlayerNumber,
        status: PlayerStatus,
    ) -> Result<Self> {
        Ok(Self {
            id: PlayerId::default(),
            name,
            height,
            weight,
            number,
            status,
            role,
        })
    }

    pub fn update_status(&mut self, next_status: PlayerStatus) {
        self.status = next_status;
    }
}
