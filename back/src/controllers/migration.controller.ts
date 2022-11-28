import { Request, Response } from "express";
import { createPool } from 'mysql';
import User, { Iuser } from "../models/user";

const pool =  () => {
    return new Promise((resolve, reject) => {
        const con = createPool({
        connectionLimit: 4,
        host: 'vaoperu.com',
        user: 'mtorres',
        password: 'libido16',
        database: 'marcoapp',
        });

        con.getConnection((err, connection)=> {
            if (err) {
                return reject(err);
            }
            resolve(connection);
        });
    });
};

export const getProvider = (id:number)=>{
    if(id===1){
        return 'admin'
    }else if(id===2){
        return 'provider'
    }else if(id===3){
        return 'user'
    }else{
        return null
    }
}


export const init = async (req: Request, res: Response) => {

    const id = req.body.id
    
    try {
        const query = `
            SELECT users.name as name, users.email, users.password, role_user.role_id FROM users 
            INNER JOIN role_user ON role_user.user_id=users.id 
            INNER JOIN urls
            WHERE users.id=${id}`
        const userData:any = (await execute(query))

        if(userData){
            const resp = userData[0]
            const body = {
                role: [getProvider(resp.role_id)],
                name: resp.name,
                email: resp.email,
                password: resp.password                
            }       
            //SAVE USER

            const {name, role, email, password} = body
            if (!name || !role || !email || !password){
                return res.status(400).json({
                    message: `Los datos de usuario no están completos`,
                    data:body
                })       
            }
            const user = await User.findOne({email: email})
            if(user){
                 return res.status(400).json({
                    message: `El usuario ya existe`
                }) 
            }
            const newUser:Iuser = new User(body)
            const newU: any = await newUser.save()
            return res.status(500).json({
                message: `Migración completada`,
                data:newU
            })


        }else{
            return res.status(500).json({
                message: `Error en userData`,
                data:userData
            })
        }


        
        
    } catch (error) {
        return res.status(500).json({
            message: `Error`,
            data:error
        })
    }


    

}


/**
 * executes SQL queries in MySQL db 
 * 
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query 
 */
export const execute = async <T>(query: string, params: string[] | Object = {}): Promise<T> => {
  try {
    const p:any = await pool()

    if (!p) throw new Error('Pool was not created. Ensure pool is created when running the app.');

    return new Promise<T>((resolve, reject) => {
      p.query(query, params, (error:any, results:any) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

  } catch (error) {
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('failed to execute MySQL query');
  }
}