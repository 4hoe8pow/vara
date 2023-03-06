use chrono::NaiveDate;

use crate::models::common::value_objects::{game_id::GameId, player_id::PlayerId, team_id::TeamId};

pub struct PreGame {
    pub id: GameId,
    pub team_dog: TeamId,
    pub dogs: Vec<PlayerId>,
    pub team_wolf: TeamId,
    pub wolfs: Vec<PlayerId>,
    pub held_at: NaiveDate,
}

impl PreGame {
    pub fn new(
        id: GameId,
        team_dog: TeamId,
        dogs: Vec<PlayerId>,
        team_wolf: TeamId,
        wolfs: Vec<PlayerId>,
        held_at: NaiveDate,
    ) -> Self {
        todo!()
    }
}
