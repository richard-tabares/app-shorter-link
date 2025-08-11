import { useState } from "react"

export const useForm = (inputUrl: {inputUrl:string} = {inputUrl: ''}) => {

    const [state, setState] = useState(inputUrl)

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target
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
