use crate::services::payload::score_payload::ScorePayload;


/// Commitボタン対応コマンド
#[tauri::command]
pub fn score_update(payload: ScorePayload) -> Result<&'static str, std::string::String> {
    Ok("")
}

// 戦績の取得コマンド
//#[tauri::command]
//pub fn fetch_results_init() -> Result<Vec<ResultPayload>, String> {
//    // DIコンテナの構築
//    let container = DIContainer::new();
//    // Resultユースケースの生成
//    let usecase = container.provide_usecase::<dyn ResultUsecase>();
//    usecase.fetch_results()
//}
