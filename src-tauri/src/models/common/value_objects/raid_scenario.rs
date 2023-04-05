#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RaidScenario {
    value: Result,
}

#[derive(Debug, Clone, PartialEq, Eq)]
enum Result {
    Raider,
    Anti,
    Allrounder,
}

