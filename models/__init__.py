from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
import os

# 1. The Base (Blueprint for your tables)
class Base(DeclarativeBase):
    pass

# 2. The Engine (The "Pipe" to your database file)
# os.getcwd() ensures it finds 'instance/limitles.db' relative to your root
db_path = os.path.join(os.getcwd(), 'instance', 'limitles.db')
engine = create_engine(f"sqlite:///{db_path}")

# 3. The Session Factory (The "Worker" that does the queries)
# We call this SessionLocal to distinguish it from the SQLAlchemy class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. Import your models so 'Base' knows they exist
from .user import User
