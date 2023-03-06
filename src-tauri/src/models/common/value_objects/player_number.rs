use anyhow::Result;
use validator::Validate;

#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug, Validate)]
pub struct PlayerNumber {
    #[validate(range(min = 0, max = 99))]
    value: u8,
}

impl PlayerNumber {
    pub fn new(value: u8) -> Result<Self> {
        Ok(Self { value })
    }
}

impl TryFrom<u8> for PlayerNumber {
    type Error = ();

    fn try_from(height: u8) -> Result<Self, Self::Error> {
        Ok(Self { value: height })
    }
}

impl From<PlayerNumber> for u8 {
    fn from(height: PlayerNumber) -> Self {
        height.into()
    }
}
