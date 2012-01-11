enyo.kind({
	name: "TaskView",
	kind: "VFlexBox",
	components: [
		{
			style: "background: white; height: 56px; font-size: 1.2rem",
			className:"enyo-box-input header-input",
			alwaysLooksFocused: true,
			kind:"Input",
			value:"Task",
			changeOnInput: true
		},
		{kind:"Scroller", flex:1,components:[
		{kind:"DividerDrawer",caption:"Notes",components:[
			{kind: "VirtualRepeater",onSetupRow:"setupRow", components:[
				{kind:"SwipeableItem",layoutKind:"HFlexLayout",onConfirm:"deleteNote",components:[
					{name:"caption"}
				]}
			]}
		]},
		{kind:"DividerDrawer",caption:"Date & Time",components:[
			{kind: "VFlexBox",className: "calendar",components:[
				{kind:"Header",className:"enyo-toolbar-light",components:[
					{kind:"ToolButton",icon:"images/Dark/go-first.png"},
					{kind:"ToolButton",icon:"images/Dark/go-previous.png"},
					{content:"January 2012",flex:1},
					{kind:"ToolButton",icon:"images/Dark/go-next.png"},
					{kind:"ToolButton",icon:"images/Dark/go-last.png"}
				]},
				{kind:"HFlexBox",components:[
					{flex: 1, content: 26},
					{flex: 1, content: 27},
					{flex: 1, content: 28},
					{flex: 1, content: 29},
					{flex: 1, content: 30},
					{flex: 1, content: 31},
					{flex: 1, content: 1}
				]},
				{kind:"HFlexBox",components:[
					{flex: 1, content: 2},
					{flex: 1, content: 3},
					{flex: 1, content: 4},
					{flex: 1, content: 5},
					{flex: 1, content: 6},
					{flex: 1, content: 7},
					{flex: 1, content: 8}
				]},
				{kind:"HFlexBox",components:[
					{flex: 1, content: 9},
					{flex: 1, content: 10},
					{flex: 1, content: 11},
					{flex: 1, content: 12},
					{flex: 1, content: 13},
					{flex: 1, content: 14},
					{flex: 1, content: 15}
				]},
				{kind:"HFlexBox",components:[
					{flex: 1, content: 16},
					{flex: 1, content: 17},
					{flex: 1, content: 18},
					{flex: 1, content: 19},
					{flex: 1, content: 20},
					{flex: 1, content: 21},
					{flex: 1, content: 22}
				]},
				{kind:"HFlexBox",components:[
					{flex: 1, content: 23},
					{flex: 1, content: 24},
					{flex: 1, content: 25},
					{flex: 1, content: 26},
					{flex: 1, content: 27},
					{flex: 1, content: 28},
					{flex: 1, content: 29}
				]},
				{kind:"HFlexBox",components:[
					{flex: 1, content: 30},
					{flex: 1, content: 31},
					{flex: 1, content: 1},
					{flex: 1, content: 2},
					{flex: 1, content: 3},
					{flex: 1, content: 4},
					{flex: 1, content: 5}
				]},
			]}
		]},
		{kind:"DividerDrawer",caption:"Reminders",components:[
			
		]},
		]},
		{kind: "Toolbar", components:[
			{kind:"GrabButton"},
			{icon:"images/Light/dialog-ok.png"},
			{icon:"images/Light/tag-new.png"},
			{icon:"images/Light/haguichi-connected.png"},
			{name:"important",icon:"images/Light/importance-low.png",onclick:"toggleImportant"},
			{icon:"images/Light/list-remove.png"}
		]}
	],
	toggleImportant: function() {
		if(this.$.important.getIcon() == "images/Light/importance-low.png") {
			this.$.important.setIcon("images/Light/importance-high.png");
		} else {
			this.$.important.setIcon("images/Light/importance-low.png");
		}
	},
	notes: [
		"Lorem",
		"Ipsum",
		"Dolor",
		"Sit",
		"Amet"
	],
	setupRow: function(inSender, inIndex) {
		var row = this.notes[inIndex];
		if (row) {
			this.$.caption.setContent(row);
			return true;
		}
	},
	deleteItem: function(inSender, inIndex) {
		this.notes.splice(inIndex, 1);
	}
});