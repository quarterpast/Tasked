enyo.kind({
	name: "TaskList",
	kind: "VFlexBox",
	components: [
		{name: "header", kind: "Header", components:[
			{content:"All tasks",flex:1,name:"headerLabel"},
			{kind:"RoundedSearchInput",className:"widen", onfocus:"searchFocus", onblur:"searchBlur",name:"search"}
		]},
		{
			style: "-webkit-border-image: none; background: white;",
			className:"enyo-box-input",
			kind:"Input",
			hint:"New task...",
			name:"newTask",
			changeOnInput: true,
			components:[{kind:"Image",src:"images/symbolic/list-add-symbolic.png"}]
		},
		{kind: "VirtualList",flex:1,onSetupRow:"setupRow", components:[
			{kind:"Item",layoutKind:"HFlexLayout",components:[
				{name:"caption",flex:1},
				{kind: "CheckBox"}
			]}
		]},
		{kind: "Toolbar", components:[
			{kind:"GrabButton"},
			{kind:"ToolButton",icon:"images/Light/list-add.png",onclick:"focusNewTask"},
			{kind:"ToolButton",icon:"images/Light/view-sort-ascending.png", onclick: "showSortMenu", name: "sortButton"}
		]},
		{name:"sortMenu", kind:"Menu",className:'enyo-icon-menu',showing:false,components:[
			{content:"Alphabetical",style:"padding:0px 5px", icon: "images/Dark/goldendict-panel.png"},
			{content:"Date",style:"padding:0px 5px", icon: "images/Dark/appointment-soon.png"},
			{content:"Priority",style:"padding:0px 5px", icon: "images/Dark/software-update-available.png"}
		]}
	],
	data: [
		"Lorem",
		"Ipsum",
		"Dolor",
		"Sit",
		"Amet"
	],
	setupRow: function(inSender, inIndex) {
		var row = this.data[inIndex];
		if (row) {
			this.$.caption.setContent(row);
			return true;
		}
	},
	showSortMenu: function() {
		this.$.sortMenu.openAroundControl(this.$.sortButton);
	},
	focusNewTask: function() {
		this.$.newTask.forceFocus();
	},
	searchFocus: function() {
		this.$.headerLabel.hide();
		console.log(this.$.search);
	},
	searchBlur: function() {
		this.$.headerLabel.show();
	}
});