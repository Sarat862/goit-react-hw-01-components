import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export function TransactionHistory({ items }) {
    const elements = items.map(({ id, type, amount, currency }) =>
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>)
    return (    
        <table className={css.tableTransaction}>
            <thead className={css.tableTransaction__head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableTransaction__body}>
                {elements}
            </tbody>
        </table>  
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}