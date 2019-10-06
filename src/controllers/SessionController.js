const User = require("../models/User")

module.exports = {
    /** Store é a rota responsável pela criação do Usuário */
    async store(req, res) {
        /**Como a variavel e o atributo do req.body vão ser email, pode encurtar passando apenas a variavel como objeto,
         * pois assim ele entende que precisa pegar o atributo email do req.body.
        */
        const { email } = req.body;

        /** Procura se existe o usuário pelo email passado */
        let user = await User.findOne({ email });

        /** Se o usuário já existir, retorna que já existe! */
        if (user) {
            return res.json({ message: 'Usuário já existe!' });
        }
        /** Se o usuário não exisitir, então cria e joga para a variável user o objeto criado! */
        else {
            user = await User.create({ email });
        }

        /** Devolve o usuário criado */
        return res.json(user);
        //const user = await User.create({email});


    }
};