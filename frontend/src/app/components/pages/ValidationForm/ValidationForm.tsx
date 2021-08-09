import "./ValidationForm.scss"

import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import ButtonNav from "../../../../core/components/generic/ButtonNav/ButtonNav"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import FormControlCustom from "../../../../core/components/form/FormControl/FormControlCustom"
import icons from "../../../lib/common/icons";

const ValidationForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [result, setResult] = useState('')
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        setResult(JSON.stringify({
            login: login,
            password: password,
            age: age,
            email: email,
            date: date,
        }))
    };

    return (
        <Card className={"validation-form justify-content-center"}>
            <Card.Header>Форма с валидацией полей</Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <FormControlCustom
                        label={"Логин"}
                        value={login}
                        onChange={setLogin}
                        isRequired={true}
                        pattern={'^[A-z]+$'}
                        patternError={'Только латинские буквы'}
                    />
                    <FormControlCustom
                        type={"password"}
                        label={"Пароль"}
                        value={password}
                        onChange={setPassword}
                        isRequired={true}
                    />
                    <FormControlCustom
                        type={"number"}
                        label={"Возраст"}
                        value={age}
                        onChange={setAge}
                        isRequired={true}
                        minValue={18}
                        maxValue={30}
                    />
                    <FormControlCustom
                        type={"email"}
                        label={"E-mail"}
                        value={email}
                        onChange={setEmail}
                        isRequired={true}
                    />
                    <FormControlCustom
                        type={"date"}
                        label={"Дата"}
                        value={date}
                        onChange={setDate}
                        isRequired={true}
                    />
                    <FormControlCustom
                        as={"textarea"}
                        label={"Вывод"}
                        value={result}
                        countRows={10}
                        isDisabled={true}
                    />
                    <ButtonNav
                        componentButtons={() =>
                            <Button type={"submit"} className={"button"} variant={"primary"}>
                                <i className={icons.ARROW}/>
                                Результат
                            </Button>
                        }
                    />
                </Form>
            </Card.Body>
        </Card>
    )
}
export default ValidationForm
