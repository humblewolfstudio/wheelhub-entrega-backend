import { user } from "../entity/User";
import { AppDataSource } from "../index";
import { createHash } from "crypto";

export async function create(req: any, res: any) {
    try {
        var username: any = req.body.username;
        var password: any = req.body.password;
        if (typeof username !== 'string') return res.status(400).json({ status: 400, message: "Username type has to be a string" });
        if (typeof password !== 'string') return res.status(400).json({ status: 400, message: "Password type has to be a string" });

        var hash = createHash('sha256').update(password).digest('base64');

        const usuario = new user();
        usuario.username = username;
        usuario.password = hash;

        await AppDataSource.manager.save(usuario);

        return res.status(200).json({ status: 200, message: "El usuario se creó correctamente" });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
}
