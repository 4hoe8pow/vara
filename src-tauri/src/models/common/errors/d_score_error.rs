use thiserror::Error;

#[derive(Error, Debug)]
pub enum D_scoreError {
    #[error("TypeError: {0}")]
    TypeError(String),
    #[error("InternalServerError: {0}")]
    InternalServerError(String),
    #[error("DuplicationError: {0}")]
    DuplicationError(String),
}

impl D_scoreError {
    pub fn type_error(s: &str) -> D_scoreError {
        D_scoreError::TypeError(s.to_string())
    }

    pub fn internal_server_error(s: &str) -> D_scoreError {
        D_scoreError::InternalServerError(s.to_string())
    }
}
