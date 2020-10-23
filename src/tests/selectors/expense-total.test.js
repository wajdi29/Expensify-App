import SelectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'
test('shoud return 0 if no expenses', () => {
    const res = SelectExpensesTotal([])
    expect(res).toBe(0)
})

test('should correctly add up a single expense ', () => {
    const res = SelectExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})
test('should correctly add up a multiple expense ', () => {
    const res = SelectExpensesTotal(expenses)
    expect(res).toBe(114195)
})