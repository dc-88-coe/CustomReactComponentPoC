import streamlit as st
from my_component import custom_react_grid


def app():
    # Set the page configuration
    st.set_page_config(page_title="React Components", page_icon="📄", initial_sidebar_state="expanded", layout="wide")

    st.title("Custom Components")
    custom_react_grid()


if __name__ == '__main__':
    app()