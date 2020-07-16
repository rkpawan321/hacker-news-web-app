import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardRecord from './cardRecord';
import { getStoryById } from '../../actions';

const useStyles = theme => ({
    singleCardMobile: {
        marginTop: '50px',
        fontFamily: 'Manrope-Bold',
        backgroundColor: '#F7F7FA',
        height: '100%',
        width: '97%',
        marginBottom: '100px',
    },
    singleCardDesktop: {
        marginTop: '50px ',
        fontFamily: 'Manrope-Bold',
        backgroundColor: '#F7F7FA',
        height: '100%',
        width: '30%',
        marginBottom: '100px',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainCardHeading: {
        color: '#000000',
        fontSize: 'calc(0.75em + 1vmin)',
    },
    allCardsDesktop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },
    allCardsMobile: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
});

class CardList extends React.Component {

    state = { cacheStoryIdList: [] }
    componentDidMount() {
        this.setState({ cacheStoryIdList: this.props.storyIdList })
        _.forEach(this.state.cacheStoryIdList, (storyId) => {
            if (!_.find(this.props.stories.storyList, { id: storyId })) {
                this.props.getStoryById(storyId);
            }
        }
        )
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.cacheStoryIdList !== nextProps.storyIdList) {
            return {
                cacheStoryIdList: nextProps.storyIdList,
            }
        } else {
            return {
                cacheStoryIdList: prevState.cacheStoryIdList
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cacheStoryIdList.length !== this.state.cacheStoryIdList.length) {
            _.forEach(this.state.cacheStoryIdList, (storyId) => {
                if (!_.find(this.props.stories.storyList, { id: storyId })) {
                    this.props.getStoryById(storyId);
                }
            }
            )
        }
    }



    getProgressIndicator = () =>
        <div style={{ backgroundColor: '#222222', width: '100%', height: '100vh' }}>
            <CircularProgress style={{
                color: 'primary',
                left: '47%',
                top: '50%',
                position: 'absolute',
            }} disableShrink />
        </div>;

    render() {
        const { classes, sortBy, stories, searchTerm } = this.props;
        let processedStoryList = stories.storyList ? stories.storyList.sort((a, b) => (a.time < b.time) ? 1 : -1) : []  //Getting most recent in the beginning
        if (sortBy === 'recent') {
            processedStoryList = processedStoryList.sort((a, b) => (a.time < b.time) ? 1 : -1)
        }
        else if (sortBy === 'old') {
            processedStoryList = processedStoryList.sort((a, b) => (a.time > b.time) ? 1 : -1)
        }
        else if (sortBy === 'most_commented') {
            processedStoryList = processedStoryList.sort((a, b) => (a.descendants < b.descendants) ? 1 : -1)
        }
        else if (sortBy === 'less_commented') {
            processedStoryList = processedStoryList.sort((a, b) => (a.descendants > b.descendants) ? 1 : -1)
        }
        if (searchTerm) {
            processedStoryList = _.filter(processedStoryList, function (story) { return (story.by.includes(searchTerm) || story.by.includes(_.capitalize(searchTerm)) || story.by.includes(_.toUpper(searchTerm)) ||  story.by.includes(_.toLower(searchTerm))) });
        } 
        return (
            <div className={classes.allCardsMobile} >
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        {_.isEmpty(processedStoryList) ? this.getProgressIndicator() :
                            <>{
                                _.map(processedStoryList, (story, id) => {
                                    return (
                                        <Grid item xs={12} style={{ padding: '20px' }} key={id}>
                                            <CardRecord story={story} />
                                        </Grid>
                                    )
                                })
                            }</>}
                    </Grid>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { stories } = state;
    return {
        stories,
    };
};


const ConnectedCardList = withStyles(useStyles, { withTheme: true })(connect(mapStateToProps, { getStoryById })(CardList));
export default ConnectedCardList;
