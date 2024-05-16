import connect from "../config/connection.js"

let informacoes = {}
const con = await connect

informacoes.all = async function(req, res) {
    try {
        let info = await con.query("SELECT * FROM informacoes;");
        res.send(info);
    } catch (error) {
        console.log("Erro encontrado ... ", error);
    }
}

informacoes.create = async function(req, res) {
    try {
        let info = req.body
        let sql = "INSERT INTO informacoes (idResp, volCons, tamMed, nomeResp) VALUES (?,?,?,?);"
        let values = [info.idResp, info.volCons, info.tamMed, info.nomeResp];
        let result = await con.query(sql, values);

        res.send({
            status: "Inserção efetuado com sucesso ...",
            result: result
        })

    } catch (error) {
        console.log("Erro encontrado ao inserir os dados ...  ", error);
    }
}

informacoes.update = async function(req, res) {
    try {
        let resp = req.params.idResp
        let info = req.body
        let sql = "UPDATE informacoes SET volCons = ?, tamMed = ?, nomeResp = ? WHERE idResp = ?"
        let values = [info.volCons, info.tamMed, info.nomeResp, resp]
        let result = await con.query(sql, values)

        res.send({
            status: "Atualização feita com sucesso... ",
            result: result
        })

    } catch (error) {
        console.log("Erro encontrado ao atualizar informações ... ", error);
    }
}

informacoes.delete = async function(req, res) {
    try {
        let resp = req.params.idResp
        let sql = "DELETE FROM informacoes WHERE idResp = ?"
        let result = await con.query(sql, [resp])

        res.send({
            status: "Exclusão realizada com sucesso... ",
            result: result
        })

    } catch (error) {
        console.log("Não foi possivel deletar o registro da tabela ... ", error)
    }
}

export { informacoes }