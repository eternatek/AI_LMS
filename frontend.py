import streamlit as st
import requests
import pandas as pd
import json
from io import StringIO

# FastAPI backend URL
API_URL = "http://localhost:8001"

# Predefined subjects and topics
SUBJECTS_TOPICS = {
    "Python": ["Data Types", "Control Flow", "Functions", "OOP", "Modules"],
    "Mathematics": ["Algebra", "Calculus", "Geometry", "Statistics"],
    "Physics": ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"],
    "Chemistry": ["Organic", "Inorganic", "Physical", "Biochemistry"],
}

# Streamlit app
st.title("AI MCQ Quiz Generator")
st.write("Generate and take multiple-choice quizzes for educational purposes.")

# Session state for user and quiz
if "username" not in st.session_state:
    st.session_state.username = None
if "mcqs" not in st.session_state:
    st.session_state.mcqs = None
if "mcq_set_id" not in st.session_state:
    st.session_state.mcq_set_id = None
if "answers" not in st.session_state:
    st.session_state.answers = {}
if "view" not in st.session_state:
    st.session_state.view = "home"

# User registration
if not st.session_state.username:
    with st.form("user_form"):
        username = st.text_input("Enter Username")
        submit_user = st.form_submit_button("Register")
        if submit_user:
            if not username:
                st.error("Please enter a username.")
            else:
                try:
                    response = requests.post(f"{API_URL}/users", json={"username": username})
                    if response.status_code == 200:
                        st.session_state.username = username
                        st.success(f"Welcome, {username}!")
                        st.rerun()
                    else:
                        st.error(f"Error: {response.json()['detail']}")
                except requests.exceptions.RequestException as e:
                    st.error(f"Failed to connect to backend: {e}")
else:
    st.write(f"Logged in as: {st.session_state.username}")
    if st.button("Logout"):
        st.session_state.username = None
        st.session_state.mcqs = None
        st.session_state.mcq_set_id = None
        st.session_state.answers = {}
        st.session_state.view = "home"
        st.rerun()

# Navigation
if st.session_state.username:
    view = st.radio("Select View", ["Generate Quiz", "View History"], horizontal=True)
    st.session_state.view = view.lower().replace(" ", "_")

# Generate Quiz
if st.session_state.view == "generate_quiz" and st.session_state.username:
    with st.form("mcq_form"):
        st.header("Create Quiz")
        subject = st.selectbox("Subject", options=list(SUBJECTS_TOPICS.keys()))
        topics = SUBJECTS_TOPICS[subject]
        topic = st.selectbox("Topic", options=topics)
        num_questions = st.selectbox("Number of Questions", options=[25, 50, 75, 100], index=0)
        difficulty = st.selectbox("Difficulty", options=["Easy", "Medium", "Difficult", "Premium"])

        submit_button = st.form_submit_button("Generate Quiz")

        if submit_button:
            if not subject or not topic:
                st.error("Please fill in all fields.")
            else:
                payload = {
                    "subject": subject,
                    "topic": topic,
                    "num_questions": num_questions,
                    "difficulty": difficulty,
                    "username": st.session_state.username
                }
                try:
                    response = requests.post(f"{API_URL}/generate_mcqs", json=payload)
                    if response.status_code == 200:
                        st.session_state.mcqs = response.json()
                        st.session_state.mcq_set_id = requests.get(f"{API_URL}/history/{st.session_state.username}").json()[-1]["mcq_set_id"]
                        st.session_state.answers = {}
                        st.success(f"Generated {len(st.session_state.mcqs)} MCQs! Start the quiz below.")
                    else:
                        st.error(f"Error: {response.json()['detail']}")
                except requests.exceptions.RequestException as e:
                    st.error(f"Failed to connect to backend: {e}")

    # Quiz Interface
    if st.session_state.mcqs:
        st.header("Take the Quiz")
        with st.form("quiz_form"):
            for i, mcq in enumerate(st.session_state.mcqs, 1):
                st.subheader(f"Question {i}: {mcq['question']}")
                answer = st.radio(
                    f"Select answer for Q{i}",
                    options=mcq["options"],
                    key=f"q{i}"
                )
                st.session_state.answers[i] = {
                    "question_id": i,
                    "user_answer": answer.split(".")[0]  # Extract A, B, C, D
                }
            submit_quiz = st.form_submit_button("Submit Quiz")
            if submit_quiz:
                answers = [st.session_state.answers[i] for i in range(1, len(st.session_state.mcqs) + 1)]
                try:
                    response = requests.post(f"{API_URL}/submit_quiz/{st.session_state.mcq_set_id}", json=answers)
                    if response.status_code == 200:
                        results = response.json()
                        st.session_state.results = results
                        st.session_state.mcqs = None
                        st.session_state.mcq_set_id = None
                        st.session_state.answers = {}
                        st.success("Quiz submitted! See results below.")
                    else:
                        st.error(f"Error: {response.json()['detail']}")
                except requests.exceptions.RequestException as e:
                    st.error(f"Failed to connect to backend: {e}")

    # Display Results
    if "results" in st.session_state and st.session_state.results:
        st.header("Quiz Results")
        score = sum(1 for r in st.session_state.results if r["is_correct"])
        total = len(st.session_state.results)
        st.write(f"Your Score: {score}/{total} ({score/total*100:.2f}%)")
        for i, result in enumerate(st.session_state.results, 1):
            with st.expander(f"Question {i}: {result['question']}"):
                for option in result["options"]:
                    st.write(option)
                st.write(f"**Your Answer**: {result['user_answer']}")
                st.write(f"**Correct Answer**: {result['correct_answer']}")
                st.write(f"**Result**: {'Correct' if result['is_correct'] else 'Incorrect'}")
                if result["explanation"]:
                    st.write(f"**Explanation**: {result['explanation']}")

# View History
if st.session_state.view == "view_history" and st.session_state.username:
    st.header("Quiz History")
    try:
        response = requests.get(f"{API_URL}/history/{st.session_state.username}")
        if response.status_code == 200:
            history = response.json()
            if not history:
                st.info("No quizzes found in your history.")
            for quiz in history:
                with st.expander(f"Quiz: {quiz['subject']} - {quiz['topic']} ({quiz['created_at']})"):
                    st.write(f"**Number of Questions**: {quiz['num_questions']}")
                    st.write(f"**Difficulty**: {quiz['difficulty']}")
                    for i, q in enumerate(quiz["questions"], 1):
                        st.subheader(f"Question {i}: {q['question']}")
                        for option in q["options"]:
                            st.write(option)
                        st.write(f"**Your Answer**: {q['user_answer'] or 'Not answered'}")
                        st.write(f"**Correct Answer**: {q['correct_answer']}")
                        if q["explanation"]:
                            st.write(f"**Explanation**: {q['explanation']}")
        else:
            st.error(f"Error: {response.json()['detail']}")
    except requests.exceptions.RequestException as e:
        st.error(f"Failed to connect to backend: {e}")