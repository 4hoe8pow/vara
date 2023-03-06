use crate::{
    dependency_injection::DIContainer,
    services::{
        payload::{pre_game_payload::PreGamePayload, result_payload::ResultPayload},
        usecases::{fetch_results::ResultUsecase, register_pre_game_usecase::PreGameUsecase},
    },
};
use anyhow::Result;

/// 戦績の取得コマンド
#[tauri::command]
pub fn fetch_results_init() -> Result<Vec<ResultPayload>, String> {
    // DIコンテナの構築
    let container = DIContainer::new();
    // Resultユースケースの生成
    let usecase = container.provide_usecase::<dyn ResultUsecase>();
    usecase.fetch_results()
}

/// 試合予定の登録コマンド
#[tauri::command]
pub fn register_pre_game(payload: PreGamePayload) -> Result<String> {
    let container = DIContainer::new();
    let usecase = container.provide_usecase::<dyn PreGameUsecase>();
    usecase.register_pre_game(payload)
}
