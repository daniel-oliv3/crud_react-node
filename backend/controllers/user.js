/* Select */
import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

/* Post */
export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `telefone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    });
};


/* Update */
export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHARE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};



























