import Reflux from 'reflux';
import Actions from '../actions/action';
import _ from 'lodash';

const db = {};

const Store = Reflux.createStore({
	listenables: Actions,
	init() {
		//
		// this.onFetchList();

	},
    onFetchList() {
    	//
    	let self = this; // ajax here
		db.list = [
			{id: '1', title: '测试标题'},
			{id: '2', title: '测试标题2'}
		];
		self.trigger(db.list);	
	},
	onFetchBaseInfo (id){
		let requestId = id;
		let title = _.result(_.find(db.list, 'id', id), 'title');
		
		this.trigger({
			id: id,
			title: title
		})
	}
})

export default Store;


