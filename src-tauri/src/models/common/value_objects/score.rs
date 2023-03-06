use validator::Validate;
#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug, Validate)]
pub struct Score {
    #[validate(range(min = 1))]
    value: u8,
}
