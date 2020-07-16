import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import MenuBarOptions from './MenuBarOptions';

const useStyles = theme => ({
	menuBarContainer: {
		// width: 'calc(100% - 70px)',
		width: '100%',
		minHeight: '36px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// backgroundColor: 'white',
		position: 'fixed',
		marginRight: '40px',
		paddingTop: '10px',
		paddingBottom: '10px',
		top: '58px',
		zIndex: 1,
		backgroundColor: '#222222',
	},
	menuList: {
		padding: '12px',
		display: 'flex',
		flexDirection: 'row',
	},
	viewOptionSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '10px',
		justifyContent: 'space-between',
	},
	currentMenuName: {
		fontFamily: 'Manrope-Regular',
		paddingLeft: '8px',
		paddingRight: '8px',
		paddingBottom: '2px',
		fontSize: 'calc(0.6em + 1vmin)',
		color: '#ffffff',
	},
	showingTextWeb: {
		color: '#ffffff',
		fontSize: 'calc(0.3em + 0.5vmin)',
		fontFamily: 'Manrope-Bold',
		marginTop: '7px',
	},
	showingTextMobile: {
		color: '#ffffff',
		fontSize: 'calc(0.3em + 0.5vmin)',
		fontFamily: 'Manrope-Bold',
		marginTop: '6px',
	},
	menuNameContainer: {
		display: 'flex',
		flexDirection: 'row',
	}
});




function MenuHeader(props) {

	const setSortByCommentNumber = (sortCommentNumber) => {
		props.setSortByCommentNumber(sortCommentNumber);
	}

	const setSortBy = (sortBy) => {
		props.setSortBy(sortBy);
	}

	const { classes, showRightOptions, persistedStoryList, storyIdList } = props;
	const matches = useMediaQuery('(min-width:670px)');
	return (
		<div>
			<div className={classes.menuBarContainer}>
				<div className={classes.menuList}>
					<div className={classes.menuNameContainer}>
						<div className={classes.currentMenuName}>
							{`Top Stories`}
						</div>
						<div className={matches ? classes.showingTextWeb : classes.showingTextMobile}>{storyIdList && persistedStoryList ? `( Showing ${persistedStoryList.length} stories )` : ''}</div>
						{/* of ${storyIdList.length} stories )` : ' */}
					</div>
				</div>
				{showRightOptions ?
					<div className={classes.viewOptionSelector}>
						<MenuBarOptions matches={matches} setSortByCommentNumber={setSortByCommentNumber} setSortBy={setSortBy} />
					</div>
					:
					<> </>
				}

			</div>

		</div>
	);
}


export default withStyles(useStyles, { withTheme: true })(MenuHeader);
