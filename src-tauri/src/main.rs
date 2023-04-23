mod dependency_injection;
mod controller;
mod infra;
mod models;
mod services;
use crate::controller::{fetch_results_init};
use tauri::generate_handler;

fn main() {
    tauri::Builder::default()
        .invoke_handler(generate_handler![fetch_results_init])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
