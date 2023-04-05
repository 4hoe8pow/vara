use thiserror::Error;

#[derive(Error, Debug)]
pub enum DharmaError {
    #[error("TypeError: {0}")]
    TypeError(String),
    #[error("InternalServerError: {0}")]
    InternalServerError(String),
    #[error("DuplicationError: {0}")]
    DuplicationError(String),
}

impl DharmaError {
    pub fn type_error(s: &str) -> DharmaError {
        DharmaError::TypeError(s.to_string())
    }

    pub fn internal_server_error(s: &str) -> DharmaError {
        DharmaError::InternalServerError(s.to_string())
    }
}
