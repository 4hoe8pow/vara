use serde::{Deserialize, Serialize};
use serde_json::json;
use tauri::{Manager, State};

#[derive(Default, Serialize, Deserialize)]
pub(crate) struct GameState {
    pub(crate) host_name: std::sync::Mutex<String>,
    pub(crate) away_name: std::sync::Mutex<String>,
}

#[tauri::command]
pub(crate) async fn register_name(
    host: String,
    away: String,
    app_handle: tauri::AppHandle,
) -> Result<(), String> {
    app_handle
        .emit_all(
            "updated_name",
            json!({
                "host": host,
                "away": away,
            }),
        )
        .expect("Failed to emit event");
    Ok(())
}
