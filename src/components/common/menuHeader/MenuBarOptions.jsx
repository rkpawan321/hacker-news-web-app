import React from 'react';
import _ from 'lodash';
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SmsIcon from '@material-ui/icons/Sms'; //less commented
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes'; //most commented

import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import HistoryIcon from '@material-ui/icons/History';

const sortByOptions = [
    'recent',
    'old',
    'most_commented',
    'less_commented',
];


const ITEM_HEIGHT = 48;

const useStyles = theme => ({


    menuButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        width: '38px',
        height: '38px',
    },
    menuButtonPlaceholder: {
        fontSize: '60%', marginRight: '20px', marginLeft: '-4px', color: '#ffffff',
    }
});

class MenuBarOptions extends React.Component {

    state = { sortBy: 'recent', anchorElsortBy: null }

    handleChange = (stateName, event) => {
        if (stateName === 'sortBy') {
            this.setState({ anchorElsortBy: event.currentTarget });
        }
    };

    handleClose = () => {
        this.setState({ anchorElsortBy: null });
    };

    setOption = (stateName, option) => {
        if (stateName === 'sortBy') {
            this.setState({ sortBy: option, anchorElsortBy: null }, () => this.props.setSortBy(this.state.sortBy));
        }
    };

    rendersortByIcon = () => {
        const { sortBy } = this.state;
        switch (sortBy) {
            case sortByOptions[0]:
                return <AmpStoriesIcon color="primary" />
            case sortByOptions[1]:
                return <HistoryIcon color="primary" />
            case sortByOptions[2]:
                return <SpeakerNotesIcon color="primary" />
            case sortByOptions[3]:
                return <SmsIcon color="primary" />
            default:
                return <AmpStoriesIcon color="primary" />
        }
    }


    renderDesktopAndMobileView = () => {
        const { anchorElsortBy } = this.state;
        let open, currentAnchor;
        const { classes } = this.props;
        return (
            <>

                {_.map(['sortBy'], (item) => {
                    let currentList;
                    switch (item) {
                        case 'sortBy':
                            currentList = sortByOptions; open = Boolean(anchorElsortBy); currentAnchor = anchorElsortBy;
                            break;
                        default:
                            currentList = sortByOptions; open = Boolean(anchorElsortBy); currentAnchor = anchorElsortBy;
                    }
                    return (
                        <div className={classes.menuButton} key={item}>
                            <IconButton onClick={(event) => this.handleChange(item, event)}>
                                {this.rendersortByIcon()}

                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={currentAnchor}
                                open={open}
                                onClose={this.handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: 200,
                                    },
                                }}
                            >
                                {currentList.map(option => (
                                    <MenuItem key={option} onClick={() => this.setOption(item, option)}>
                                        {_.startCase(option)}
                                    </MenuItem>
                                ))}
                            </Menu>

                            {this.props.matches ?
                                <div style={{ textAlign: 'left', width: '70px' }}>
                                    <Typography className={classes.menuButtonPlaceholder}>
                                        {_.startCase(this.state[item])}
                                    </Typography>
                                </div> : <> </>}
                        </div>
                    )
                })}
            </>
        )
    }
    render() {
        return (
            <>
                {this.renderDesktopAndMobileView()}
            </>
        );
    }
};

export default withStyles(useStyles, { withTheme: true })(MenuBarOptions);










