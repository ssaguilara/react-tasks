import "./Book.css";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

import { TaskContext } from "../context/TaskContext";
import { useContext, useEffect } from "react";

export default function Book() {
  const { isModalAddOpen } = useContext(TaskContext);

  function handleBookClick(e) {
    let container = document.querySelector(".container");
    let target = e.target;
    let book = target.parentNode;

    if (window.innerWidth > 550) {
      if (target.getAttribute("class") === "frontPage") {
        container.classList.remove("moveTranslate--reset");
        container.classList.add("moveTranslate");
        setTimeout(() => {
          book.classList.remove("moveRotation--reset");
          book.classList.add("moveRotation");
        }, 2000);
      }
      if (target.getAttribute("class") === "leftPage") {
        book.classList.remove("moveRotation");
        book.classList.add("moveRotation--reset");

        setTimeout(() => {
          container.classList.remove("moveTranslate");
          container.classList.add("moveTranslate--reset");
        }, 2000);
      }
    }
  }

  useEffect(()=>{


    const addModal = document.querySelector('.book-content .book:nth-child(1)')
    const addButtonModal = document.querySelector('.addButtonModal')

    if(isModalAddOpen || window.innerWidth > 600){
      addModal.classList.add('visible');
      addButtonModal.classList.add('noVisible');
    }else{
      addModal.classList.remove('visible');
      addButtonModal.classList.remove('noVisible');
      console.log('empezo aqui')
    }

  },[isModalAddOpen])

  
  return (
    <div className="container moveTranslate--reset">
      <div className="book-content ">
        <div
          className="book moveRotation--reset"
          onClick={(e) => handleBookClick(e)}
        >
          <div className="frontPage"></div>
          <LeftPage />
        </div>
        <div className="book" onClick={(e) => handleBookClick(e)}>
          <RightPage />
        </div>
      </div>
    </div>
    
  );
}
