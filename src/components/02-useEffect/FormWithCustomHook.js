 
import { useForm } from '../../hooks/useForm';
import './effects.css'; 

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues )
    }
    return (
        <form onSubmit={ handleSubmit }>
            <h2>FormWithCustomHook</h2>
            <hr />
            <div className='form-group'>
            <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}>
                </input>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}>
                </input>

                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder='Tu password' 
                    value={password}
                    onChange={handleInputChange}>
                </input>

            </div> 
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}
