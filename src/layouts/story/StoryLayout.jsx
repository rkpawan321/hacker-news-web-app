import React from 'react';

import StoryPage from '../../components/story';

class StoryLayout extends React.Component {

	render() {
		return (
				<StoryPage {...this.props} />
		)
	}
}

export default StoryLayout;
