use anyhow::Result;
use std::str::FromStr;
use ulid::Ulid;

use crate::models::common::errors::dharma_error::DharmaError;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct PlayerId(String);

impl PlayerId {
    fn new(s: &str) -> Result<Self> {
        Ok(PlayerId(
            Ulid::from_string(s)
                .map_err(|_| DharmaError::type_error("IDに誤りがあります"))?
                .to_string(),
        ))
    }
}

impl Default for PlayerId {
    fn default() -> Self {
        // TODO: uuid等で自動生成する
        PlayerId("DummyId".to_string())
    }
}

impl FromStr for PlayerId {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self> {
        Self::new(s)
    }
}

impl std::fmt::Display for PlayerId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)?;
        Ok(())
    }
}
