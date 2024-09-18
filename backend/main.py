from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    age: int

DB: list[Person] = [
    Person(id=1, name="jonathan", age=30),
    Person(id=2, name="teste---", age=31),
    Person(id=3, name="123-----", age=32),
    Person(id=4, name="asdasd4-", age=33),
    Person(id=5, name="hello5--", age=34)
]

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}
@app.get("/message")
def read_root():
    return {"Hello": "World"}


@app.get("/api")
def read_api():
    return DB


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}