
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    f"sqlite:///{os.path.join(BASE_DIR, 'instance', 'limitles.db')}"
)
SECRET_KEY = os.getenv("SECRET_KEY")


GAMES_DATA = [
    {"id": "direction", "name": "Direction Test", "icon": "bi-arrows-move", "disabled": False},
    {"id": "reaction", "name": "Reaction Game", "icon": "bi-lightning-fill", "disabled": False},
    {"id": "aim", "name": "Aim Trainer", "icon": "bi-bullseye", "disabled": False},
    {"id": "number-memory", "name": "Number Memory", "icon": "bi-123", "disabled": False},
    {"id": "dot-estimation", "name": "Dot Estimation", "icon": "bi-eye", "disabled": False},
    {"id": "sound-localization", "name": "Sound Localization", "icon": "bi-volume-up-fill", "disabled": False},
    {"id": "typing-speed", "name": "Typing Speed", "icon": "bi-type", "disabled": False},
]