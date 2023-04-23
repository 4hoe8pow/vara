mod dependency_injection;
mod controller;
mod infra;
mod models;
mod services;
use crate::controller::{score_update};
use tauri::generate_handler;

fn main() {
    tauri::Builder::default()
        .invoke_handler(generate_handler![score_update])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
