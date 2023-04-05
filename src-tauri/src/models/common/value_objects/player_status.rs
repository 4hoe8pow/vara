use anyhow::Result;
use validator::Validate;

#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug, Validate)]
pub struct PlayerStatus {
    #[validate(range(min = 0, max = 2))]
    value: u8,
}

impl PlayerStatus {
    pub fn new(id: u8) -> Result<Self> {
        Ok(Self { value: id })
    }
}

impl TryFrom<u8> for PlayerStatus {
    type Error = ();

    fn try_from(height: u8) -> Result<Self, Self::Error> {
        Ok(Self { value: height })
    }
}

impl From<PlayerStatus> for u8 {
    fn from(height: PlayerStatus) -> Self {
        height.into()
    }
}
