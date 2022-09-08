import {useState} from "react";

const useForm = ({onSubmit, initialState, isReset = true}) => {
    const [state, setState] = useState({...initialState});

    const handleChange = ({target}) => {
        const { name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        if(isReset) {
            setState({...initialState})
        }
    };

    return {state, setState, handleChange, handleSubmit};
}

export default useForm;