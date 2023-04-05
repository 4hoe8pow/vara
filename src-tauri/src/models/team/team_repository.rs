use crate::models::{common::value_objects::score::Score, player::player_entity::Player};

use super::team_entity::Team;
use anyhow::Result;

pub trait TeamRepository: Send + Sync + 'static {
    /// 点数加算
    fn add(&self, team: Team, point: Score) -> Result<Score>;

    /// メンバー追加
    fn register(&self, team: Team, member: Player) -> Result<()>;
}
