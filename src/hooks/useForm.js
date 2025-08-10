import { useState } from "react"

export const useForm = (inputUrl = {}) => {

    const [state, setState] = useState(inputUrl)

    const onInputChange = ({ target }) => {

        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onResetForm = () => {
        
        setState({ inputUrl: '' })
    }
    return {
        ...state,
        state,
        onInputChange,
        onResetForm
    }
}
