import React from 'react';
import { connect } from 'react-redux';
import { Typography, IconButton, CircularProgress } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import useStyles from './style';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LinkIcon from '@material-ui/icons/Link';
import { getISTFormat2 } from '../../../common/util';

class CardRecord extends React.Component {

	state = { currentStories: [] }

	getProgressIndicator = () => <CircularProgress style={{
		color: 'primary',
		// left: '47%',
		// top: '50%',
		marginLeft: '50%',
		marginRight: '50%',
		marginTop: '30px',
		marginBottom: '30px',
		// position: 'absolute',
	}} disableShrink />;

	// onLinkButtonCLick = (url) => {
	// 	window.open(url)
	// };

	renderSingleCard = (story) => {
		const { classes } = this.props;
		return (
			<>
				<Typography className={classes.cardTitle}>
					{story ? story.title : ''}
				</Typography>

				<div className={classes.bottomPart}>
					<div className={classes.bottomLeft}>
						<div className={classes.dateAndNameContainerMobile}>
							<div className={classes.dateContainer}>
								<AccessTimeIcon color="primary" className={classes.timeIcon} />
								<Typography className={classes.dateTitle}>{getISTFormat2(story.time)}</Typography>
								{/* {matches && <div className={classes.textDivider}>|</div>} */}
							</div>
							<div>
								<Typography className={classes.authorNameMobile}>{story ? story.by : ''}</Typography>
							</div>
						</div>
						<Typography className={classes.commentsTitle}>
							{`Comments`} <span className={classes.commentsCount}>{story.descendants}</span>
						</Typography>
					</div>
					<IconButton
						aria-label="link"
						className={classes.linkButton}
						// onClick={() => this.onLinkButtonCLick(story.url)}
						href={story.url} rel="noopener noreferrer" target="_blank"
					>

						<LinkIcon fontSize="large" className={classes.linkButton} />

					</IconButton>
				</div>
			</>
		)
	}

	render() {
		const { classes, story } = this.props;
		return (
			<div className={classes.particularCard}	>
				{this.renderSingleCard(story)}
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


const ConnectedCardRecord = withStyles(useStyles, { withTheme: true })(connect(mapStateToProps, {})(CardRecord));
export default ConnectedCardRecord;
