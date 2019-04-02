import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	overflow:hidden;
`;

export const HomeLeft = styled.div`
	width:625px;
	margin-left:15px;
	float:left;
	padding-top:30px;
	.banner-img{
		width:625px;
		height:270px;
	}
`;

export const HomeRight = styled.div`
	float:right;
	width:280px;
	padding-top:30px;
`;

export const BackTop = styled.div`
	position:fixed;
	right:100px;
	bottom:100px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	font-size:14px;
`;



export const TopicWrapper = styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-30px;
	border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float:left;
	background:#f7f7f7;
	height:32px;
	line-height:32px;
	padding-right:10px;
	margin-left:30px;
	margin-bottom:18px;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	cursor:pointer;
	.topic-pic{
		display:block;
		float:left;
		width:32px;
		margin-right:10px;
	}
`;

export const MoreTopic = styled.a`
	float:left;
	line-height:32px;
	color:#787878;
	font-size:14px;
	display:inline-block;
	margin-left:30px;
	cursor:pointer;
`;

export const ListItem = styled.div`
	padding:20px 0;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;
	.pic{
		display:block;
		width:125px;
		height:100px;
		float:right;
	}
`;

export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		font-size:18px;
		font-weight:bold;
		line-height:27px;
		color:#333;
	}
	.desc{
		line-height:24px;
		font-size:13px;
		color:#999;
	}
`;

export const LoadMore = styled.a`
	display:inline-block;
	width:595px;
	height:20px;
	padding:10px 15px;
	margin:30px 0 60px 0;
	text-align:center;
	border-radius:20px;
	background:#a5a5a5;
	color:white;
	cursor:pointer;
`;

export const RecommendWrapper = styled.div`
//	margin:3px 0;
	width:280px;
`;

export const RecommendItem = styled.div`
	display:block;
	width:280px;
	height:50px;
	background:${(props) => props.imgUrl};
	border-radius:5px;
	margin-bottom:5px;
`;

export const WriterWrap = styled.div`
	width:280px;
	margin-top:10px;
`;

export const WeixinImg = styled.div`
	width:234px;
	padding:10px 22px;
	border:1px solid #cdcdcd;
	overflow:hidden;
	.pic{
		width:60px;
		height:60px;
		background:gray;
		float:left;
	}
	.content{
		display:inline-block;
		vertical-align:middle;
		margin-left:10px;
		padding-top:15px;
	}
	.title{
		font-size:15px;
		color:#333;
	}
	.desc{
		display:block;
		font-size:13px;
		color:#999;
		margin-top:4px;
	}
`;

export const WriterGroup = styled.div`
	width:280px;
`;

export const WriterTop = styled.div`
	height:30px;
	margin-top:30px;
	font-size:14px;
	color:#969696;
	.left{
		display:inline-block;
		float:left;
	}
	.right{
		display:inline-block;
		float:right;
	}
`;


export const WriterItem =  styled.div`
	width:280px;
	overflow:hidden;
	margin-bottom:10px;
	.pic{
		width:48px;
		height:48px;
		float:left;
		border-radius:50%;
	}
`;

export const ItemInfo = styled.div`
	float:left;
	width:232px;
	height:48px;
	position:relative;
	margin-top:10px;
`;

export const InfoLeft = styled.div`
	position:absolute;
	left:10px;
	width:170px;
	.title{
		font-size:14px;
	}
	.desc{
		font-size:12px;
		color:#969696;
		margin-top:2px;
	}
`;

export const InfoRight = styled.a`
	font-size:13px;
	color:#42c02e;
	width:52px;
	position:absolute;
	right:0;
	top:0;
`;

export const MoreWriter = styled.a`
	display:block;
	width:254px;
	height:19px;
	padding:7px 12px;
	border:1px solid #dcdcdc;
	border-radius:4px;
	font-size:13px;
	color:#787878;
	background:#f7f7f7;
	text-align:center;
	line-height:19px;
`;

