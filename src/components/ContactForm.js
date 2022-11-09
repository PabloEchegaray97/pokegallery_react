import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from "../context/CartContext";
import { useContext, useState } from 'react';


const ContactForm = () => {
    const { cart } = useContext(CartContext);
    const defaultForm = { name: '', email: '', message: '', cart: cart };
    const total = cart.reduce((acc, product)=> acc += product.price * product.quantity,0).toFixed(2);
    console.log(cart)


    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState();

    const changeHandler = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value });
    };

    const submitHandler = (ev) => {
        ev.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, 'contactform');
        addDoc(contactFormCollection, form).then((snapshot) => {
            setId(snapshot.id);
        });
    };

    const resetHandler = () => {
        setForm(defaultForm);
        setId('');
    };

    return (
        <>
            {id ? (
                <>
                    <div>
                        Gracias por enviar el mensaje, se ha guardado con id {id}
                    </div>
                    <div>
                        <button onClick={resetHandler}>Enviar otro mensaje</button>
                    </div>
                </>
            ) : (
                <form onSubmit={submitHandler} className='form-container'>

                    <div>
                        <p className='form-title fw-bold'>¡Ingresa tus datos a continuacion para finalizar tu compra!</p>
                        <div className='fw-bold'>Tu pedido:</div>
                        <>
                            {cart.map((pokemon) => (
                                <div> {pokemon.name} x {pokemon.quantity} - ${pokemon.price}</div>
                            ))}
                        </>
                        <div className='mb-2 mt-2 fw-bold'>Total: ${total}</div>
                        <div className='form-input'>
                            <label htmlFor="name">Nombre</label>
                            <input
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={changeHandler}
                                className="form-control"
                            />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={changeHandler}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={changeHandler}
                            className="form-control"
                        ></textarea>
                    </div>
                    <div className='btn-form-container'>
                    <button className='btn btn-danger btn-form'>Enviar</button>
                    </div>
                </form>
            )}
        </>
    );
};

export default ContactForm;