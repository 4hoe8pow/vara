use crate::{
    models::result::result_repository_trait::ResultRepository,
    services::payload::result_payload::ResultPayload,
};

#[derive(Default)]
pub struct ResultRepositoryImpl {}

impl ResultRepository for ResultRepositoryImpl {
    fn hoge(&self) -> Result<Vec<ResultPayload>, String> {
        Ok(vec![
            ResultPayload {
                id: "1".to_string(),
                winner: "尾道オータムリーブス".to_string(),
                loser: "安藝ライノハーツ".to_string(),
                winner_score: 33,
                loser_score: 19,
                held_at: "2023/02/17".to_string(),
            },
            ResultPayload {
                id: "2".to_string(),
                winner: "B.W.H".to_string(),
                loser: "尾道オータムリーブス".to_string(),
                winner_score: 31,
                loser_score: 27,
                held_at: "2023/02/04".to_string(),
            },
            ResultPayload {
                id: "3".to_string(),
                winner: "安藝ライノハーツ".to_string(),
                loser: "B.W.H".to_string(),
                winner_score: 31,
                loser_score: 30,
                held_at: "2023/03/04".to_string(),
            },
        ])
    }
}
