mod controller;
mod dependency_injection;
mod infra;
mod models;
mod services;
use crate::controller::score_update;
use tauri::{generate_handler, Manager};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let observer = app.get_window("observer").unwrap();
            let scorer = app.get_window("scorer").unwrap();
            let id = observer.listen("event-name", |event| {
                println!("got window event-name with payload {:?}", event.payload());
            });
            scorer.unlisten(id);
            Ok(())
        })
        .invoke_handler(generate_handler![score_update])
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
