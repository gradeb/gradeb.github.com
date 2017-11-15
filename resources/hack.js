var hack = {
	
	modules: {},
	
	i: function (path, data) {
		if(!path || !data) throw("ERR #1: no module path or data supplied.");
		var o = hack.modules;
		var keys = path.split('/');
		var lastKey = keys.pop();
		var lastObj = keys.reduce((o, i) => o[i] = o[i] || {}, o); 
		lastObj[lastKey] = data;
		return path;
	},
	
	o: function (path) {
		if(!path) throw("ERR #2: no module path supplied.");
		return path.split('/').reduce((o,i)=>o[i], hack.modules);
	}
	
};

module.exports = hack;