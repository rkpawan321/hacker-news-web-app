import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  TextField } from '@material-ui/core';

const useStyles = theme => ({
    searchBarContainer: {
        backgroundColor: 'white',
        top: '146px',
        right: '30px',
        left: '30px',
        position: 'fixed',
        zIndex: '1',
        borderRadius: '6px',
        fontFamily: 'Manrope-Bold',
    },
    mobileSearchInput: {
        alignContent: 'center',
        height: '54px',
        width: '100%',
        fontFamily: 'Manrope-Bold',
    },
    searchButton: {
        height: '17px',
        width: '17px',
    },
    input: {
        '&::placeholder': {
            fontSize: '12px',
        },
    },
});

class SearchBox extends React.Component {

    state = { searchButtonClicked: false, searchTerm: '' }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value }, () => this.props.setSearchTerm(this.state.searchTerm));
    };

    renderSearchBox = () => {
        const { classes } = this.props;
        return (


            <TextField
                className={classes.mobileSearchInput}
                autoFocus
                variant="outlined"
                value={this.state.searchTerm}
                onChange={this.handleChange('searchTerm')}
                ariant="outlined"
                SelectProps={{
                    native: true,
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                InputProps={{
                    classes: { input: classes.input }
                }}
                placeholder="Please type author name"
            />
        )
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.searchBarContainer}>
                    {this.renderSearchBox()}
                </div>

            </div>
        );
    }
}


export default withStyles(useStyles, { withTheme: true })(SearchBox);
