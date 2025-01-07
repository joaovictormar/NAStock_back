const app = require("./src/app");

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});
