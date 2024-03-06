import css from './transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead className={css.tableHead}>
      <tr>
        <th className={css.tableTh}>Type</th>
        <th className={css.tableTh}>Amount</th>
        <th className={css.tableTh}>Currency</th>
      </tr>
    </thead>
    <tbody className={css.tableBody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.tableTr} key={id}>
          <td className={css.tableTd}>{type}</td>
          <td className={css.tableTd}>{amount}</td>
          <td className={css.tableTd}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default TransactionHistory;
