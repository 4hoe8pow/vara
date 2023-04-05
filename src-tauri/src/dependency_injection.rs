use std::rc::Rc;

use di::{singleton, transient, ServiceCollection};

use crate::{
    infra::result_repositry_impl::ResultRepositoryImpl,
    models::result::result_repository_trait::ResultRepository,
    services::usecases::fetch_results::{ResultInteractor, ResultUsecase},
};

pub struct DIContainer {
    pub dependencies: ServiceCollection,
}

impl DIContainer {
    pub fn new() -> Self {
        let mut container = DIContainer {
            dependencies: ServiceCollection::new(),
        };
        container.injection();
        container
    }

    pub fn injection(&mut self) {
        self.dependencies.add(
            singleton::<dyn ResultRepository, ResultRepositoryImpl>()
                .from(|_| Rc::new(ResultRepositoryImpl::default())),
        );
        self.dependencies.add(
            transient::<dyn ResultUsecase, ResultInteractor>().from(|x| {
                Rc::new(ResultInteractor::new(
                    x.get_required::<dyn ResultRepository>(),
                ))
            }),
        );
    }

    pub fn provide_usecase<T>(&self) -> Rc<T>
    where
        T: ?Sized + 'static,
    {
        let usecase = self.dependencies.build_provider().unwrap();
        usecase.get_required::<T>()
    }
}
