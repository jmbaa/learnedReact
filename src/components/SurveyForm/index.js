import React from "react";
import css from "./style.module.css";

const SurveyForm = (props) => {
  return (
    <div className="container">
      <form action="/action_page.php">
        <div className="row">
          <div className="col-25">
            <label for="fname"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Судалгааны нэр"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Тайлбар"
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-25">
            <label for="country">Төрөл</label> 
          </div>
          <div className="col-75">
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div> */}
        <div className="row">
          <div className="col-25">
            <label for="subject"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Доод нас"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="subject"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Судалгаа авах дээд нас"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="subject"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Хүйс"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="subject"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Хамруулах хүний тоо"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="subject"></label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Нэг хүнд ноогдох дүн"
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Илгээх" />
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
