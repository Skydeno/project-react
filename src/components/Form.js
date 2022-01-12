import React from "react";
import { useForm } from 'react-hook-form';
import './Form.css';
import '../App.css';


function Form() {
    const {register,handleSubmit} = useForm();
    const onSubmit = (d) =>
        alert(JSON.stringify(d));


    return(
        <div class="testbox" id='form'>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Co sądzisz o naszej stronie</h1>
                <p class="question">Czy odwiedzasz nas pierwszy raz?</p>
                <div class="question-answer">
                    <label>
                        <input className="form-input" type="radio" value="tak" {...register("1answer")} required/> Tak
                    </label>
                    <label>
                        <input className="form-input" type="radio" value="nie" {...register("1answer")} required/> Nie 
                    </label>
                </div>
                <p class="question">Czego szukałeś/aś?</p>
                <textarea className="form-txt"rows="5" required></textarea>
                <p class="question">Znalazłeś/aś to?</p>
                <div class="question-answer">
                    <label>
                        <input className="form-input" type="radio" value="1" {...register('2answer')} required/> Tak, wszystko co chciałem/am
                    </label>
                    <label>
                        <input className="form-input" type="radio" value="2" {...register('2answer')} required/> Tak, ale nie wszystko
                    </label>
                    <label>
                        <input className="form-input" type="radio" value="3" {...register('2answer')} required/> Nie
                    </label>
                    </div>
                <div class="btn-block">
                    <input className="btn-form" type="submit" value="Wyślij"></input>
                </div>
            </form>
        </div>
    )
};

export default Form