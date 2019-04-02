import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	WriterWrap,
	WeixinImg,
	WriterGroup,
	WriterTop,
	WriterItem,
	ItemInfo,
	InfoLeft,
	InfoRight,
	MoreWriter
} from '../style';

class Writer extends PureComponent{
	render(){
		const { list } = this.props;
		return(
			<WriterWrap>
				<WeixinImg>
					<img className="pic" alt=''/>
					<div className="content">
						<h3 className="title">下载简书手机App &gt;</h3>
						<p className="desc">随时随地发现和创作内容</p>
					</div>
				</WeixinImg>
				<WriterGroup>
					<WriterTop>
						<div className="left">推荐作者</div>
						<div className="right">
							换一批
						</div>
					</WriterTop>
					{
						list.map((item) => {
							return(
								<WriterItem key={item.get('id')}>
									<img className="pic" src={item.get('imgUrl')} alt=''/>
									<ItemInfo>
										<InfoLeft>
											<h4 className="title">{item.get('title')}</h4>
											<p className="desc">写了{item.get('num')}字 · {item.get('likes')}喜欢</p>
										</InfoLeft>
										<InfoRight>+ 关注</InfoRight>
									</ItemInfo>
								</WriterItem>
							);
						})
					}
					<MoreWriter>查看全部 &gt;</MoreWriter>
				</WriterGroup>
			</WriterWrap>
		)
	}
}

const mapState = (state) => ({
	list:state.getIn(['home','writerList'])
});

export default connect(mapState)(Writer);