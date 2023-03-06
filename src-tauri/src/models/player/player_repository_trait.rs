use super::player_entity::Player;
use anyhow::Result;

pub trait PlayerRepository {
    fn save(&self, player: Player) -> Result<()>;
}
