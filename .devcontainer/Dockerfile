ARG VARIANT=1-bullseye
FROM mcr.microsoft.com/devcontainers/rust:0-${VARIANT}

ARG ID=20000
ARG USER_NAME=qq
ARG GIT_NAME
ARG GIT_EMAIL

# 開発用ユーザ
RUN groupadd -g ${ID} ${USER_NAME}
RUN useradd -m -s /bin/bash -u ${ID} -g ${ID} -G sudo ${USER_NAME}
RUN echo ${USER_NAME}:pass | chpasswd
RUN echo "${USER_NAME} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/${USER_NAME}
RUN chmod 0440 /etc/sudoers.d/${USER_NAME}
RUN chmod -R ug+rwx /usr/local/
USER ${ID}

# Tauriに必要なライブラリ
RUN sudo apt-get update
RUN sudo apt-get install -y libwebkit2gtk-4.0-dev \
  build-essential \
  curl \
  wget \
  libssl-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  gcc-multilib

# yarn を入れとく
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update
RUN sudo apt install -y yarn

# node を最新化
RUN sudo yarn global add n
RUN sudo n latest

# Tauri をインストール
RUN cargo install tauri-cli

# Git設定
RUN git config --global user.email ${GIT_EMAIL}
RUN git config --global user.name ${GIT_NAME}
RUN sudo chown -R qq.qq /dharma/.git
