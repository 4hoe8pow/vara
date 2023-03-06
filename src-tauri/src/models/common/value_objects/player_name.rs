use anyhow::Result;
use std::str::FromStr;
use validator::Validate;

#[derive(Clone, Debug, PartialEq, Eq, Validate)]
pub struct PlayerName {
    #[validate(length(min = 1))]
    value: String,
}

impl PlayerName {
    pub fn new(name: &str) -> Result<Self> {
        Ok(Self {
            value: name.to_string(),
        })
    }
}

impl FromStr for PlayerName {
    type Err = anyhow::Error;

    fn from_str(name: &str) -> Result<Self> {
        Self::new(name)
    }
}
impl std::fmt::Display for PlayerName {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.value)?;
        Ok(())
    }
}
