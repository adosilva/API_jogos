


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Turma Front-End Senai",
      "description" : "API TESTE - Para um site de jogos"
    });
  }
}

