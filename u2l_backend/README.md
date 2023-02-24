# Create the virtual environment and Install the requirements
pip install -r requirements.txt

# To run the application
uvicorn main:app --reload

# To open the swagger UI
localhost:8000/docs
