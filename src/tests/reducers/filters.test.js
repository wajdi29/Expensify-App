import filtersReducer from '../../reducers/filters'
import moment from 'moment'
test('Should setup defauly filter values', () => {
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {
        type:'SORT_BY_AMOUNT'
    })
    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState= {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount'
    }
    const action ={type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})
// should set text filter
test('Should setup filter text ', () => {
const text  ='somethig to test'
const action = {
    type:'SET_TEXT_FILTER',
    text
}
const state = filtersReducer(undefined, action)
expect(state.text).toBe(text)
})
// set startDate filter

test('should set start date filter', () => {
    const startDate = moment(0).add(4, 'days').valueOf()
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should set end date filter', () => {
    const endDate = moment(0).add(4, 'days').valueOf()
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})