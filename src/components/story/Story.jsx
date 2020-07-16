import React from 'react';
import _ from 'lodash';

import AppHeader from '../common/header/AppHeader';
import MenuHeader from '../common/menuHeader/MenuHeader';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { Box, Fab, CircularProgress, Button } from '@material-ui/core';
import debounce from "lodash.debounce";

import { withStyles } from '@material-ui/core/styles';
import useStyles from './style'
import CardList from './CardList';
import SearchBox from './SearchBox';

import { getAllStories } from '../../actions';

class Story extends React.Component {

	state = { showSearchBar: false, storyIdListStartingIndex: 0, storyIdListEndingIndex: 15, sortBy: 'top_stories', setSortByCommentNumber: 'no_filter', storyList: [], searchTerm: '' };

	componentDidMount() {
		this.props.getAllStories();
	};

	showSearchBar = () => {
		this.setState(prevState => ({ showSearchBar: !prevState.showSearchBar }))
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

	getCardListToBeRendered = () => {
		const { stories } = this.props;
		const storyIdList = stories && stories.storyIdList ? stories.storyIdList.slice(this.state.storyIdListStartingIndex, this.state.storyIdListEndingIndex) : [];
		return storyIdList;
	}

	renderCardList = () => {
		let storyIdList = this.getCardListToBeRendered();
		return (
			<CardList storyIdList={storyIdList} sortBy={this.state.sortBy} searchTerm={this.state.searchTerm} />
		)
	}

	loadNextBatch = () => {
		if (this.props.stories && this.props.stories.storyIdList && this.state.storyIdListEndingIndex < this.props.stories.storyIdList.length) {
			this.setState({ storyIdListEndingIndex: this.state.storyIdListEndingIndex + 15 })
		}
	}

	setSortBy = (sortBy) => {
		this.setState({
			sortBy: sortBy,
		})
	}

	setSearchTerm = (searchTerm) => {
		this.setState({
			searchTerm: searchTerm,
		})
	};

	setSortByCommentNumber = (sortByCommentNumber) => {
		this.setState({
			sortByCommentNumber: sortByCommentNumber,
		})
	}

	render() {
		const { classes, stories } = this.props;
		const storyIdList = stories && stories.storyIdList ? stories.storyIdList.slice(0, 15) : [];
		window.onscroll = debounce(() => {
			if (
				window.innerHeight + document.documentElement.scrollTop
				=== document.documentElement.offsetHeight
			) {
				this.loadNextBatch();
			}
		}, 100);
		return (
			<>
				<AppHeader />
				<MenuHeader location={this.props.location} showRightOptions={true} setSortBy={this.setSortBy} persistedStoryList={this.props.stories.storyList} storyIdList={this.props.stories.storyIdList} />
				{this.state.showSearchBar && <SearchBox setSearchTerm={this.setSearchTerm} />}
				<Box className={classes.landingPageContainer} onClick={() => this.setState({ showSearchBar: false })}>
					{_.isEmpty(storyIdList) ? this.getProgressIndicator() : this.renderCardList()}
					<div className={classes.loadMoreButtonContainer}>{this.props.stories && this.props.stories.storyIdList && this.state.storyIdListEndingIndex < this.props.stories.storyIdList.length ? <Button className={classes.buttonText} onClick={this.loadNextBatch}> Load more</Button> : <> </>}</div>
				</Box>
				{this.state.searchTerm ? <Fab variant="extended" aria-label="Delete" style={{ position: 'fixed', bottom: '15px', right: '15px', height: '38px', fontSize: '10px', textTransform: 'capitalize' }} onClick={() => this.setState({ searchTerm: ''})}>
					Clear Search Results
      </Fab>
					: <Fab color="primary" size="small" aria-label="person" style={{ position: 'fixed', bottom: '15px', right: '15px' }} onClick={this.showSearchBar}>
						<SearchIcon style={{ color: 'white' }} />
					</Fab>}
			</>
		);
	};
};

const mapStateToProps = (state) => {
	const { stories } = state;
	return {
		stories,
	};
};

const ConnectedStory = withStyles(useStyles, { withTheme: true })(connect(mapStateToProps, { getAllStories })(Story));
export default ConnectedStory;
