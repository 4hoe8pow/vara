use serde_json::json;
use tauri::{Manager, State};

#[derive(Default)]
pub(crate) struct GameState {
    pub(crate) host_name: std::sync::Mutex<String>,
    pub(crate) away_name: std::sync::Mutex<String>,
}

#[tauri::command]
pub(crate) async fn register_name(
    host_name: String,
    away_name: String,
    state: State<'_, GameState>,
    app_handle: tauri::AppHandle,
) -> Result<(), String> {
    *state.host_name.lock().unwrap() = host_name.clone();
    *state.away_name.lock().unwrap() = away_name.clone();
    app_handle
        .emit_all(
            "team_state_updated",
            json!({
                "host_name": host_name,
                "away_name": away_name,
            }),
        )
        .expect("Failed to emit event");
    Ok(())
}
