import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
}from './style';

class Home extends PureComponent{
	
	
	handleScrollTop(){
		window.scrollTo(0,0);
	}
	
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=''/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showScroll?<BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop>:null}
				
			</HomeWrapper>
		)
	}
	
	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents();
	}
	
	componentWillUnmount(){
		window.addEventListener('scroll',this.props.changeScrollToShow)
	}
	
	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollToShow)
	}
	
}

const mapState = (state) => ({
	showScroll:state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch) => ({
	changeHomeData(){
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollToShow(e){
		if(document.documentElement.scrollTop > 100){
			dispatch(actionCreators.toggleTopShow(true))
		}else{
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState,mapDispatch)(Home);