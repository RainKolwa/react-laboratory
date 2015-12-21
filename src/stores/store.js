import Reflux from 'reflux';
import Actions from '../actions/action';

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
			{id: 1, title: '测试标题'},
			{id: 2, title: '测试标题2'}
		];
		self.trigger(db.list);	
	},
	onFetchBaseInfo (id){
		console.log(db.list);

		this.trigger({
			id: 1,
			title: '测试标题'
		})
	}
})

export default Store;


