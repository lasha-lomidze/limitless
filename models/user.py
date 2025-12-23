from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String 
from . import Base

class User(Base):
    __tablename__ = "users"

    # SQLAlchemy 2.0 automatically knows Mapped[int] is an Integer primary key
    id: Mapped[int] = mapped_column(primary_key=True)
    
    # You use String(50) here because you want to limit the length
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    
    # 128 is a good length for Bcrypt or SHA-256 hashes
    password_hash: Mapped[str] = mapped_column(String(128), nullable=False)
