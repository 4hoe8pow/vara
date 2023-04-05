use crate::services::payload::result_payload::ResultPayload;

// 実際の実装を依存関係の定義とともに提供
pub trait ResultRepository {
    // ただの初期表示
    fn hoge(&self) -> Result<Vec<ResultPayload>, String>;
}
