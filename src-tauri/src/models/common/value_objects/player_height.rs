use anyhow::Result;
use validator::Validate;

#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug, Validate)]
pub struct PlayerHeight {
    #[validate(range(min = 100, max = 250))]
    value: u8,
}

impl PlayerHeight {
    pub fn new(id: u8) -> Result<Self> {
        Ok(Self { value: id })
    }
}

impl TryFrom<u8> for PlayerHeight {
    type Error = ();

    fn try_from(height: u8) -> Result<Self, Self::Error> {
        Ok(Self { value: height })
    }
}

impl From<PlayerHeight> for u8 {
    fn from(height: PlayerHeight) -> Self {
        height.into()
    }
}
