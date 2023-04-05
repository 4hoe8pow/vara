use crate::services::payload::pre_game_payload::PreGamePayload;

pub trait PreGameRepository {
    // 試合予定の登録
    fn save(&self, pre_game_payload: PreGamePayload) -> String;
}

pub trait HavePreGameRepository {
    type PreGameRepository: PreGameRepository;
    fn provide_repository(&self) -> Self::PreGameRepository;
}
