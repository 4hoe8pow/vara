use anyhow::Result;
use validator::Validate;

#[derive(Debug, Clone, PartialEq, Eq, Validate)]
pub struct PlayerRole {
    #[validate(range(min = 0, max = 3))]
    value: u8,
}

impl PlayerRole {
    pub fn new(id: u8) -> Result<Self> {
        Ok(Self { value: id })
    }
}

impl TryFrom<u8> for PlayerRole {
    type Error = ();

    fn try_from(height: u8) -> Result<Self, Self::Error> {
        Ok(Self { value: height })
    }
}

impl From<PlayerRole> for u8 {
    fn from(height: PlayerRole) -> Self {
        height.into()
    }
}
