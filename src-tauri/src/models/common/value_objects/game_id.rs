use anyhow::Result;
use std::str::FromStr;
use ulid::Ulid;

use crate::models::common::errors::dharma_error::DharmaError;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct GameId(String);

impl GameId {
    fn new(s: &str) -> Result<Self> {
        Ok(GameId(
            Ulid::from_string(s)
                .map_err(|_| DharmaError::type_error("IDに誤りがあります"))?
                .to_string(),
        ))
    }
}

impl Default for GameId {
    fn default() -> Self {
        // TODO: uuid等で自動生成する
        GameId("DummyId".to_string())
    }
}

impl FromStr for GameId {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self> {
        Self::new(s)
    }
}

impl std::fmt::Display for GameId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)?;
        Ok(())
    }
}
