import './ExpenseItem.css'

function ExpenseItem(props) { // this name props can be anything like date,data,expences etc but i prefer props
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;