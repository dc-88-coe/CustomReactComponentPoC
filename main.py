import streamlit as st
from my_component import rating_stars

def app():
    # Set the page configuration
    st.set_page_config(page_title="React Components", page_icon="📄", initial_sidebar_state="expanded")

    text = ""
    st.title("Components")
    rating_stars()


if __name__ == '__main__':
    app()