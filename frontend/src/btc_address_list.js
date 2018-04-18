
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, fetchTodos } from './actions/main_actions';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import compose from 'recompose/compose';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const data = [
  {id: 1, address: '3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r', owner: 'bitfinex - cold wallet', balance: 194384, numIn: 1, numOut: 2, percentageOfTotalMarket: '1.15%'},
  {id: 2, address: '16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk', owner: 'bittrex - cold wallet', balance: 137203, numIn: 3, numOut: 4, percentageOfTotalMarket: '0.8086%'}
];

class btcAddressList extends Component {
  render() {
  	const { classes } = this.props;

  	return (
  		<Paper className={classes.root}>
	      <Table className={classes.table}>
	        <TableHead>
	          <TableRow>
	            <TableCell>BTC Address</TableCell>
	            <TableCell>Owner</TableCell>
	            <TableCell>Balance</TableCell>
	            <TableCell numeric>Number of Inputs</TableCell>
	            <TableCell numeric>Number of Inputs</TableCell>
	            <TableCell numeric>% of coins</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {data.map(eachBtcAddress => {
	            return (
	              <TableRow key={eachBtcAddress.id}>
	                <TableCell>{eachBtcAddress.address}</TableCell>
	                <TableCell>{eachBtcAddress.owner}</TableCell>
	                <TableCell numeric>{eachBtcAddress.balance}</TableCell>
	                <TableCell numeric>{eachBtcAddress.numIn}</TableCell>
	                <TableCell numeric>{eachBtcAddress.numOut}</TableCell>
	                <TableCell>{eachBtcAddress.percentageOfTotalMarket}</TableCell>
	              </TableRow>
	            );
	          })}
	        </TableBody>
	      </Table>
	    </Paper>
    )
  }
}

btcAddressList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  fetchTodos
};
//export default withStyles(styles)(btcAddressList);

export default compose(
  withStyles(styles, { name: 'btcAddressList' }),
  connect(mapStateToProps, mapDispatchToProps)
)(btcAddressList);
