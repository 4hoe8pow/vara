mod controller;
mod dependency_injection;
mod infra;
mod models;
mod services;
use crate::controller::score_update;
use tauri::generate_handler;

fn main() {
    tauri::Builder::default()
        .invoke_handler(generate_handler![score_update])
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
