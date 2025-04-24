import * as React from 'react';

export function useForm<T extends Record<string, unknown>>( initialForm: T ) {

    const [ formState, setFormState ] = React.useState( initialForm );

    const onInputChange = (
        event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}