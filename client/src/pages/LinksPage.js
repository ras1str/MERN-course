import React, { useState } from "react";
import { Sidebar } from "../Components/Sidebar";

export const LinksPage = () => {

    const [state, setState] = useState()

    return (
    <div>
        <div className="row">
            <form className="col s12 m6 ">

                <h4>Название</h4>

                <div class="input-field col s12">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                </div>
            

                <h4>Стоимость</h4>

                <div class="input-field col s12">
                <input type="number" min="0" max="10000" step="1" name="Broker_Fees" id="broker_fees" required="required"/>
                </div>

                <h4>Описание</h4>
                <div class="input-field col s12">
                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                </div>

                <h4>Тип сдачи</h4>

                <select class="browser-default">
                    <option value="" disabled selected>Выберите один вариан</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>

                <h4>Категория</h4>

                <select class="browser-default">
                    <option value="" disabled selected>Выберите один вариант</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>

                <h4>Телефон</h4>
                <div class="input-field col s6">
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label for="icon_telephone">Telephone</label>
                </div>

                <h4>Фотографии</h4>

                <form action="#">
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>Фотографии</span>
                            <input type="file" multiple />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                        </div>
                    </div>
                </form>
            </form>
        </div>
        </div>

    )
}