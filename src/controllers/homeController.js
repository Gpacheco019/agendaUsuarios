exports.paginaInicial = (req, res) => {    
    res.render('index', {
        titulo: 'este será o titulo da pagina',
        numeros: [1, 2, 3, 4, 5, 6, 7],
    });
    return
};


exports.tratRota = (req, res) => {
    res.send(req.body)
    return
};