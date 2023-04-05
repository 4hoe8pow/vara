use crate::{
    models::pre_game::pre_game_repository_trait::PreGameRepository,
    services::payload::pre_game_payload::PreGamePayload,
};

pub struct PreGameRepositoryImpl {}

impl PreGameRepository for PreGameRepositoryImpl {
    fn save(&self, _pre_game_payload: PreGamePayload) -> String {
        "nice".to_string()
    }
}
