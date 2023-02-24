from fastapi import FastAPI, Request
from fastapi import File, Form, UploadFile
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr 
import os
import uuid
import uvicorn
import asyncio


class Data(BaseModel):
    analysis_type : str


app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analysis")
async def analysis_type(data:Data):
    analysisType = ['javaanalysis', 'canalysis', 'shellanalysis']
    analysis_type = data.analysis_type
    if analysis_type in analysisType:
        return {"Message": "Accepted"}
    else:
        return {"Error": "Please enter valid analysis type"}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    id = uuid.uuid1()
    try:
        os.makedirs("uploads", exist_ok=True)
        file_path = f"uploads/{file.filename + ' - ' + str(id)}"
        with open(file_path, "wb") as f:
            f.write(await file.read())
        return {"filename": file.filename + " - " + str(id)}
    except Exception as e:
        return {"error": str(e)}
