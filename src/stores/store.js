import Reflux from 'reflux';
import Actions from '../actions/action';

const Store = Reflux.createStore({
	listenables: Actions,
	init() {
		//
		// this.onFetchList();	
	},
    onFetchList() {
    	//
    	var self = this; // ajax here
		let list = [
			{id: 1, title: '测试标题'},
			{id: 2, title: '测试标题2'}
		];
		self.trigger(list);	
	}
})

export default Store;


