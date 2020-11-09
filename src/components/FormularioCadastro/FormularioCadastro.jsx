import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

function FormularioCadastro() {
    return (
        <form action="">
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <label>Promoções</label>
            <input type="checkbox"/>
            <label>Novidades</label>
            <input type="checkbox"/>
            <Button variant="contained" color="primary" type="submit"> Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;