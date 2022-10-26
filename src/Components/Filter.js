import React from 'react'
import { FormLabel } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {filterTodos} from '../Redux/actions/index'


function Filter() {
   const dispatch=useDispatch()
   // dispatch filterTodos "no-filter" or "filter" or "done"
    return (
        <div className="filter">
            <form>
                <FormLabel htmlFor="all">All Todos</FormLabel>
            <input type="radio" id="all" name="filt" onClick={()=>dispatch(filterTodos("no-filter"))}/>
            <FormLabel htmlFor="notDone">On going</FormLabel>
            <input type="radio" id="notDone" name="filt" onClick={()=>dispatch(filterTodos("filter"))} />
            <FormLabel htmlFor="complete">Completed</FormLabel>
            <input type="radio"id="complete" name="filt" onClick={()=>dispatch(filterTodos("done"))}/>
            </form>
        </div>
    )
}

export default Filter