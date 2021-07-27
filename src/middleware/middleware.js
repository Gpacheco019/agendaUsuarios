exports.meuMiddlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é valor da Variavel Local';
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
};