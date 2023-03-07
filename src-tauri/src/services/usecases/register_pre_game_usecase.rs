use crate::models::pre_game;
use crate::models::pre_game::pre_game_entity::PreGame;
use crate::models::pre_game::pre_game_repository_trait::PreGameRepository;
use crate::services::payload::pre_game_payload::PreGamePayload;
use anyhow::Result;
use di::ServiceRef;

pub trait PreGameUsecase {
    fn register_pre_game(&self, payload: PreGamePayload) -> Result<String>;
}

pub struct PreGameInteractor {
    repository: ServiceRef<dyn PreGameRepository>,
}

impl PreGameInteractor {
    pub fn new(repository: ServiceRef<dyn PreGameRepository>) -> Self {
        Self { repository }
    }
}

// impl PreGameUsecase for PreGameInteractor {
//     fn register_pre_game(&self, payload: PreGamePayload) -> Result<String> {
//         // payload をエンティティに変換
//         let pre_game = PreGame::new(payload);
//     }
// }
