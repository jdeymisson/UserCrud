import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/User';

export const cadastro = (req: Request, res: Response) => {
    let { email, name, cidade } = req.body;

     if( email && name && cidade ) {
         User.create({
             email,
             name,
             cidade
         });
         res.redirect('/usuario');
     }
    res.render('pages/cadastro');
}



export const usuario = async (req: Request, res: Response) => {;
    const listUser = await User.findAll(); 
    
    res.render('pages/usuario', {
        listUser
    });
}

export const search = async (req: Request, res: Response) => {;
    let { search } = req.query;

    const listUser = await User.findAll({
        where: {
            name: {
                [Op.like]: `%${search}%`
            }
        }
    }); 
    
    res.render('pages/usuario', {
        listUser
    });
}

export const editarUser = async (req: Request, res: Response) => {;
    let { id } = req.params;

    let usuario = await User.findAll({
        where: {
            id
        }
    }); 
   
    let userEdit = usuario[0];
    

    let { email, name, cidade } = req.body;

    await User.update({email, name, cidade}, {
        where: {
            id
        }
    });
    
    res.render('pages/editar', {
        userEdit
    });
}

export const updateUser = async (req: Request, res: Response) => {;
    let  id: string  = req.params.id;

    let { email, name, cidade } = req.body;

    await User.update({email, name, cidade}, {
        where: {
            id
        }
    });

    res.redirect('/usuario');
}



export const deletarUser = async (req: Request, res: Response) => {;
    let { id } = req.params;
   
    await User.destroy({
        where: {
            id
        }
    });
    
    res.redirect('/usuario');
}