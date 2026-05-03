from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "MView"
    app_env: str = "development"
    app_username: str = "admin"
    app_password: str = "change-me"
    jwt_secret: str = "change-me"
    jm_image_root: str = "/mnt/hdd/JMDownload/images"
    backend_host: str = "0.0.0.0"
    backend_port: int = 8000


@lru_cache
def get_settings() -> Settings:
    return Settings()
