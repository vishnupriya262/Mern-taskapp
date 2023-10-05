const router = require ('express').Router();
const todoItems = require('../models/todoItems');
//import todo model
const TodoItemModel = require('../models/todoItems');


//create first route --add Todo Item to database
router.post('/api/item', async (req, res)=>{
    try{
      const newItem = new TodoItemModel({
        item: req.body.item
      })
      //save this item in database
      const saveItem = await newItem.save()
      res.status(200).json(saveItem);
    }catch(err){
      res.json(err);
    }
  })

  //lets creATE SECOND route -- get data from database
  router.get('/api/items', async (req,res)=>{
    try {
        const allTodoItems = await TodoItemModel.find({});
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
  })

  //update item
router.put('/api/item/:id', async (req, res)=>{
    try{
      //find the item by its id and update it
      const updateItem = await TodoItemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json(updateItem);
    }catch(err){
      res.json(err);
    }
  })
  

  //Delete item from database
router.delete('/api/item/:id', async (req, res)=>{
    try{
      //find the item by its id and delete it
      const deleteItem = await TodoItemModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Item Deleted');
    }catch(err){
      res.json(err);
    }
  })
  

//export router
module.exports = router;