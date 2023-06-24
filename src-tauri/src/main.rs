// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod cmd;
use cmd::*;

fn main() {
    tauri::Builder::default()
        .manage(GameState {
            host_name: String::new().into(),
            away_name: String::new().into(),
        })
        .invoke_handler(tauri::generate_handler![register_name])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
