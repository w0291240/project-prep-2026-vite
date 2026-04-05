const conn = require('../connection.cjs')

module.exports = {
    indexCat(request, response) {
        const sql = `SELECT * FROM categories`
        conn.query(sql, (error, results) => {
            if (error) return response.sendStatus(500)
            return response.send( { categories: results })
        })       
    },
    storeCat(request, response) {
        const sql = `INSERT INTO categories (category_name) VALUES (?)`
        const values = [request.body.category.category_name]
        conn.query(sql, values, (error, results) => {
            console.log(`results: ${ JSON.stringify(results) }`)
            if (error) return response.sendStatus(500)

            //send back all items
            const sql = `SELECT * FROM categories`
            conn.query(sql, (error, results) => {
                if (error) return response.sendStatus(500)
                return response.send( { categories: results })
            })
        })
    },
    updateCat(request, response){
        const sql = `UPDATE categories SET category_name=? WHERE id=?`
        const values = [request.body.category.category_name, request.params.id]
        conn.query(sql, values, (error, results) => {
            console.log(`results: ${ JSON.stringify(results) }`)
            if (error) return response.sendStatus(500)

            //send back all items
            const sql = `SELECT * FROM categories`
            conn.query(sql, (error, results) => {
                if (error) return response.sendStatus(500)
                return response.send( { categories: results })
            })
        })
    },
    destroyCat(request, response){
        const sql = `DELETE FROM categories WHERE id=?`
        const values = [request.params.id]
        conn.query(sql, values, (error, results) => {
            console.log(`results: ${ JSON.stringify(results) }`)
            if (error) return response.sendStatus(500)

            //send back all items
            const sql = `SELECT * FROM categories`
            conn.query(sql, (error, results) => {
                if (error) return response.sendStatus(500)
                return response.send( { categories: results })
            })
        })
    },

    indexItem(request, response) {
        const sql = `SELECT * FROM items`
        conn.query(sql, (error, results) => {
            if (error) return response.sendStatus(500)
            return response.send( { items: results })
        })       
    },

    storeItem(request, response) {
        const sql = `INSERT INTO items (category_id, title, description, price, quantity, sku) VALUES (?, ?, ?, ?, ?, ?)`
        const values = [request.body.item.category_id, request.body.item.title, request.body.item.description, request.body.item.price, request.body.item.quantity, request.body.item.sku]
        conn.query(sql, values, (error, results) => {
            console.log(`results: ${ JSON.stringify(results) }`)
            if (error) return response.sendStatus(500)

            //send back all items
            const sql = `SELECT * FROM items`
            conn.query(sql, (error, results) => {
                if (error) return response.sendStatus(500)
                return response.send( { items: results })
            })
        })
    },
    updateItem(request, response){
        const sql = `UPDATE items SET category_id=?, title=?, description=?, price=?, quantity=?, sku=? WHERE id=?`
        const values = [request.body.item.category_id, request.body.item.title, request.body.item.description, request.body.item.price, request.body.item.quantity, request.body.item.sku, request.params.id]
        conn.query(sql, values, (error, results) => {
            console.log(`results: ${ JSON.stringify(results) }`)
            if (error) return response.sendStatus(500)

            //send back all items
            const sql = `SELECT * FROM items`
            conn.query(sql, (error, results) => {
                if (error) return response.sendStatus(500)
                return response.send( { items: results })
            })
        })
    },
    destroyItem(request, response){
        const sql = `DELETE FROM items WHERE id=?`
        const values = [request.params.id]
        conn.query(sql, values, (error, results) => {
            console.log(`results: ${ JSON.stringify(results) }`)
            if (error) return response.sendStatus(500)

            //send back all items
            const sql = `SELECT * FROM items`
            conn.query(sql, (error, results) => {
                if (error) return response.sendStatus(500)
                return response.send( { items: results })
            })
        })
    },

    getStorefront(request,response) {
        const sql = `SELECT
                            items.id,
                            items.title,
                            categories.category_name AS category,
                            items.description,
                            items.price
                        FROM items
                        JOIN categories ON items.category_id = categories.id
                        ORDER BY items.id ASC`
                conn.query(sql, (error, results) => {
            if (error) return response.sendStatus(500)
            return response.send( { storefront: results })
        })       
    }
}