import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        // Serialização de dados
        // Transformar os dados de forma a ficar mais acessivel para quem estiver requisitando
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.100.105:3333/uploads/${item.image}`
            }
        });
    
        return response.json(serializedItems);
    };
};

export default ItemsController;