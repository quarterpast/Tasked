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
		{kind:"DividerDrawer",className:"calendarDrawer",caption:"Date & Time",components:[
			{kind: "VFlexBox",className: "calendar",components:[
				{kind:"Header",className:"enyo-toolbar-light",components:[
					{kind:"ToolButton",icon:"images/Dark/go-first.png"},
					{kind:"ToolButton",icon:"images/Dark/go-previous.png"},
					{content:"January 2012",flex:1},
					{kind:"ToolButton",icon:"images/Dark/go-next.png"},
					{kind:"ToolButton",icon:"images/Dark/go-last.png"}
				]},
				{kind:"HFlexBox",components:[
					{kind:"CustomButton", className:"day",flex: 1, content: 26},
					{kind:"CustomButton", className:"day",flex: 1, content: 27},
					{kind:"CustomButton", className:"day",flex: 1, content: 28},
					{kind:"CustomButton", className:"day",flex: 1, content: 29},
					{kind:"CustomButton", className:"day",flex: 1, content: 30},
					{kind:"CustomButton", className:"day",flex: 1, content: 31},
					{kind:"CustomButton", className:"day",flex: 1, content: 1}
				]},
				{kind:"HFlexBox",components:[
					{kind:"CustomButton", className:"day",flex: 1, content: 2},
					{kind:"CustomButton", className:"day",flex: 1, content: 3},
					{kind:"CustomButton", className:"day",flex: 1, content: 4},
					{kind:"CustomButton", className:"day",flex: 1, content: 5},
					{kind:"CustomButton", className:"day",flex: 1, content: 6},
					{kind:"CustomButton", className:"day",flex: 1, content: 7},
					{kind:"CustomButton", className:"day",flex: 1, content: 8}
				]},
				{kind:"HFlexBox",components:[
					{kind:"CustomButton", className:"day",flex: 1, content: 9},
					{kind:"CustomButton", className:"day",flex: 1, content: 10},
					{kind:"CustomButton", className:"day",flex: 1, content: 11},
					{kind:"CustomButton", className:"day",flex: 1, content: 12},
					{kind:"CustomButton", className:"day",flex: 1, content: 13},
					{kind:"CustomButton", className:"day",flex: 1, content: 14},
					{kind:"CustomButton", className:"day",flex: 1, content: 15}
				]},
				{kind:"HFlexBox",components:[
					{kind:"CustomButton", className:"day",flex: 1, content: 16},
					{kind:"CustomButton", className:"day",flex: 1, content: 17},
					{kind:"CustomButton", className:"day",flex: 1, content: 18},
					{kind:"CustomButton", className:"day",flex: 1, content: 19},
					{kind:"CustomButton", className:"day",flex: 1, content: 20},
					{kind:"CustomButton", className:"day",flex: 1, content: 21},
					{kind:"CustomButton", className:"day",flex: 1, content: 22}
				]},
				{kind:"HFlexBox",components:[
					{kind:"CustomButton", className:"day",flex: 1, content: 23},
					{kind:"CustomButton", className:"day",flex: 1, content: 24},
					{kind:"CustomButton", className:"day",flex: 1, content: 25},
					{kind:"CustomButton", className:"day",flex: 1, content: 26},
					{kind:"CustomButton", className:"day",flex: 1, content: 27},
					{kind:"CustomButton", className:"day",flex: 1, content: 28},
					{kind:"CustomButton", className:"day",flex: 1, content: 29}
				]},
				{kind:"HFlexBox",components:[
					{kind:"CustomButton", className:"day",flex: 1, content: 30},
					{kind:"CustomButton", className:"day",flex: 1, content: 31},
					{kind:"CustomButton", className:"day",flex: 1, content: 1},
					{kind:"CustomButton", className:"day",flex: 1, content: 2},
					{kind:"CustomButton", className:"day",flex: 1, content: 3},
					{kind:"CustomButton", className:"day",flex: 1, content: 4},
					{kind:"CustomButton", className:"day",flex: 1, content: 5}
				]},
			]},
			{kind:"HFlexBox",className:"clock",components:[
				{kind:"CustomListSelector",value:9,items:[
					{caption:"1",value:"1"},
					{caption:"2",value:"2"},
					{caption:"3",value:"3"},
					{caption:"4",value:"4"},
					{caption:"5",value:"5"},
					{caption:"6",value:"6"},
					{caption:"7",value:"7"},
					{caption:"8",value:"8"},
					{caption:"9",value:"9"},
					{caption:"10",value:"10"},
					{caption:"11",value:"11"},
					{caption:"12",value:"12"}
				]},
				{content:":",className:"colon"},
				{kind:"CustomListSelector",value:9,items:[
					{caption:"00",value:"0"},
					{caption:"01",value:"1"},
					{caption:"02",value:"2"},
					{caption:"03",value:"3"},
					{caption:"04",value:"4"},
					{caption:"05",value:"5"},
					{caption:"06",value:"6"},
					{caption:"07",value:"7"},
					{caption:"08",value:"8"},
					{caption:"09",value:"9"},
					{caption:"10",value:"10"},
					{caption:"11",value:"11"},
					{caption:"12",value:"12"},
					{caption:"3",value:"3"},
					{caption:"4",value:"4"},
					{caption:"5",value:"5"},
					{caption:"6",value:"6"},
					{caption:"7",value:"7"},
					{caption:"8",value:"8"},
					{caption:"9",value:"9"},
					{caption:"0",value:"0"},
					{caption:"1",value:"1"},
					{caption:"2",value:"2"},
					{caption:"3",value:"3"},
					{caption:"4",value:"4"},
					{caption:"5",value:"5"},
					{caption:"6",value:"6"},
					{caption:"7",value:"7"},
					{caption:"8",value:"8"},
					{caption:"9",value:"9"},
					{caption:"0",value:"0"},
					{caption:"1",value:"1"},
					{caption:"2",value:"2"},
					{caption:"3",value:"3"},
					{caption:"4",value:"4"},
					{caption:"5",value:"5"},
					{caption:"6",value:"6"},
					{caption:"7",value:"7"},
					{caption:"8",value:"8"},
					{caption:"9",value:"9"},
					{caption:"0",value:"0"},
					{caption:"1",value:"1"},
					{caption:"2",value:"2"},
					{caption:"3",value:"3"},
					{caption:"4",value:"4"},
					{caption:"5",value:"5"},
					{caption:"6",value:"6"},
					{caption:"7",value:"7"},
					{caption:"8",value:"8"},
					{caption:"9",value:"9"},
					{caption:"0",value:"0"},
					{caption:"1",value:"1"},
					{caption:"2",value:"2"},
					{caption:"3",value:"3"},
					{caption:"4",value:"4"},
					{caption:"5",value:"5"},
					{caption:"6",value:"6"},
					{caption:"7",value:"7"},
					{caption:"8",value:"8"},
					{caption:"9",value:"9"},
					]},
				{kind:"CustomListSelector",className:"am",value:"AM",items:[
					{caption:"AM",value:0},
					{caption:"PM",value:12},
				]}

			]}
		]},
		{kind:"DividerDrawer",caption:"Reminders",components:[
			
		]},
		]},
		{kind: "Toolbar", components:[
			{kind:"GrabButton", name:"grab",onclick:""},
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
	},
	hideGrab: function() {
		this.$.grab.hide();
	},
	showGrab: function() {
		this.$.grab.show();
	}
});