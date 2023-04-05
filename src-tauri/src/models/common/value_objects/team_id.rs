use std::convert::TryFrom;

#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug)]
pub struct TeamId {
    value: u8,
}

impl TryFrom<u8> for TeamId {
    type Error = ();

    fn try_from(n: u8) -> Result<Self, Self::Error> {
        Ok(Self { value: n })
    }
}

impl From<TeamId> for u8 {
    fn from(n: TeamId) -> Self {
        n.value
    }
}
