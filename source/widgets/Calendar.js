enyo.kind({
	name: "Widgets.Calendar",
	kind: "VFlexBox",
	className: "calendar",
	components:[
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
	]
});