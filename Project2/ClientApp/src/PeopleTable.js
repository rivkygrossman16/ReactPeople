import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
class PeopleTable extends React.Component {

    state = {
        people: [],
        first: '',
        last: '',
        age:''
        }

    onAddClick = () => {
        const { people, first, last, age } = this.state;
        const person = { firstName: first, lastName: last, ages: age };
        const copy = [person, ...people];
        this.setState({ people: copy, first: '', last: '', age: '' });
        console.log(people);
    }

    onClearClick = () => {
        const { people } = this.state;
        this.setState({ people:[]});
    }
        onTextFirstChange = e => {
    this.setState({ first: e.target.value });
}
onTextLastChange = e => {
    this.setState({ last: e.target.value });
}
onTextAgeChange = e => {
    this.setState({ age: e.target.value });
}

    render() {
        return (
            <div className='container mt-5'>
                <PersonForm
                    first={this.state.first}
                    last={this.state.last}
                    age={this.state.age}
                    onAddClick={this.onAddClick}
                    onTextFirstChange={this.onTextFirstChange}
                    onTextLastChange={this.onTextLastChange}
                    onTextAgeChange={this.onTextAgeChange}
                    onClearClick={this.onClearClick} />
                <PersonRow
                    people={this.state.people}
                        />
            </div>
        )
}

}
export default PeopleTable;