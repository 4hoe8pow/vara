use crate::{
    models::result::result_repository_trait::ResultRepository,
    services::payload::result_payload::ResultPayload,
};
use di::ServiceRef;

pub trait ResultUsecase {
    fn fetch_results(&self) -> Result<Vec<ResultPayload>, String>;
}

pub struct ResultInteractor {
    repository: ServiceRef<dyn ResultRepository>,
}

impl ResultInteractor {
    pub fn new(repository: ServiceRef<dyn ResultRepository>) -> Self {
        Self { repository }
    }
}

impl ResultUsecase for ResultInteractor {
    fn fetch_results(&self) -> Result<Vec<ResultPayload>, String> {
        self.repository.hoge()
    }
}
