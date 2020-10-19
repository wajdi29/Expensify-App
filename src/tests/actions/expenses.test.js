import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('shoud setup edit expense action object', () => {
    const action = editExpense('123456', {note:'hello world'})
    
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123456',
        updates:{note:'hello world'} 
    })
})

test('shoud setup addexpense action object with provided values ', () => {
    const expenseData = {
        description:'Rent',
        amount:109500,
        createdAt:1000,
        note:'This was last month rent' 
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
        id:expect.any(String)
        }

    })
}) 

test('shoud setup addexpense action object with default values ', () => {
   
    const action = addExpense()
    expect(action).toEqual({

        type:'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description:'',
            note:'' ,
            amount:0,
            createdAt:0,
        }
    });

}) ;