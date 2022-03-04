import React from 'react';
import { useFooter } from '../../../hooks';
import './subscription.scss';

export default function Subscription() {
    const data = useFooter();
    const dataSubscription = data?.allStrapiLayout?.nodes[0].footer.subscription;

    const [values, setValues] = React.useState({
        email: ''
    })

    const [validations, setValidations] = React.useState({
        email: ''
    })

    const validateAll = () => {
        const { email } = values;
        const validations = { email: '' };
        let isValid = true;

        if (!email) {
            validations.email = 'Email es requerido';
            isValid = false;
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Formato inválido, debe ser  example@mail.com';
            isValid = false;
        }

        if (!isValid) {
            setValidations(validations);
        }

        return isValid;
    }

    const validateOne = (e) => {
        const { name } = e.target;
        const value = values[name];
        let message = '';

        if (!value) {
            message = `${name} es requerido`;
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Formato inválido, debe ser example@mail.com';
        }

        setValidations({ ...validations, [name]: message });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateAll();

        if (!isValid) {
            return false;
        }

        alert(`Subscripción exitosa`);
    }

    const { email } = values;

    const { email: emailVal } = validations;

    return (
        <div className="ContactData__Item">
            <h3 className="titleSubscription">{dataSubscription.title}</h3>
            <form onSubmit={handleSubmit}>
                <div className="ContactData__Form d-flex flex-md-column">
                    <label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur={validateOne}
                        />
                    </label>
                    <button type="submit">Subscribe</button>
                </div>
                <div>{emailVal}</div>

            </form>
        </div>
    )
}
