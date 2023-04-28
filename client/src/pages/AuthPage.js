import React, {useContext, useState, useEffect} from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import '../index.css'


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email:'', pass:''

    })

    useEffect( () => {

        message(error)
        clearError()
        
    }, [error, message, clearError])

    const changeHadler = event =>{

        setForm({ ...form, [event.target.name]: event.target.value })

    }

    const registerHandler = async () => {

        try { 
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.msg)
        } catch (e) {
            
        }

    }
    const loginHandler = async () => {

        try { 
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            
        }

    }



    return (

        <div className="row center-align " >
            <div className="col s6 offset-s3">
                <h1>Avito2.0</h1>
            </div>
            <div className="row" >
                <div className="col s12 m6" id="auth">
                    <div className="card grey darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">Авторизация</span>
                            <div className="row">
                                <form className="col s12">
                                <div class="row">
                                        <div className="input-field col s12">
                                            <input name="email" id="email" type="email" onChange={changeHadler}></input>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="pass" id="password" type="password" onChange={changeHadler}/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                 
                                    
                                </form>
                            </div>
                            <div className="card-action">
                                <button className="btn deep-orange lighten-1" style={{ marginRight: 50, marginLeft:15 }}
                               onClick={loginHandler}
                               disables={loading}
                               >
                                    Войти</button>
                                <button className="btn yello darken-4"
                                onClick={registerHandler}
                                disables={loading}
                                >Регистрация
                                </button>
                            </div>
                        </div>
                    

                </div>


            </div>
        </div>
    </div>

     )
}