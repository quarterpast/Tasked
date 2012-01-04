enyo.kind({
	name: "TaskList",
	kind: "VFlexBox",
	components: [
		{name: "header", kind: "Header", content: "All tasks"},
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
				{kind:"CheckBox"},
				{name:"caption",flex:1}
			]}
		]},
		{kind: "Toolbar", components:[
			{kind:"GrabButton"},
			{flex:1},
			{kind:"ToolButton",icon:"images/Light/list-add.png",onclick:"focusNewTask"},
			{kind:"ToolButton",icon:"images/Light/view-sort-ascending.png", onclick: "showSortMenu", name: "sortButton"}
		]},
		{name:"sortMenu", kind:"Menu",showing:false,components:[
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
	}
});