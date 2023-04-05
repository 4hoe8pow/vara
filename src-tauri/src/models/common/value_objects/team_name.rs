use validator::Validate;

#[derive(PartialEq, Eq, Clone, PartialOrd, Ord, Debug, Validate)]
pub struct TeamName {
    #[validate(length(min = 1))]
    value: String,
}
