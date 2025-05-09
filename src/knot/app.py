from importlib.resources import files
from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles


STATIC_ASSETS_PATH = Path(__file__).parent / "static"

app = FastAPI()
ui_app = StaticFiles(directory=STATIC_ASSETS_PATH, html=True)
app.mount("/", ui_app)
