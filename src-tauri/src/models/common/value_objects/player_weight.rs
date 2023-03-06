use anyhow::Result;
use validator::Validate;

#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug, Validate)]
pub struct PlayerWeight {
    #[validate(range(max = 85))]
    value: u8,
}

impl PlayerWeight {
    pub fn new(id: u8) -> Result<Self> {
        Ok(Self { value: id })
    }
}

impl TryFrom<u8> for PlayerWeight {
    type Error = ();

    fn try_from(height: u8) -> Result<Self, Self::Error> {
        Ok(Self { value: height })
    }
}

impl From<PlayerWeight> for u8 {
    fn from(height: PlayerWeight) -> Self {
        height.into()
    }
}
