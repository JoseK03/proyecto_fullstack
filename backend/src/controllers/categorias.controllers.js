import getConnection from "../db/database.js";

const functionGet= await (req,res)=>{
    try {
        const connection = await getConnection();
        const conectar = connection.query("SELECT * FROM categorias");
        res.json(conectar);       
    } catch (error) {
        
    }
}