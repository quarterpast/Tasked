var now = new Date;
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
				{kind:"SwipeableItem",layoutKind:"HFlexLayout",onConfirm:"deleteNote",style:"overflow:hidden",components:[
					{name:"caption",style:"white-space: nowrap;"}
				]}
			]}
		]},
		{kind:"DividerDrawer",className:"calendarDrawer",caption:"Date & Time",components:[
			{kind:"Widgets.Calendar"},
			{kind:"HFlexBox",className:"clock",components:[
				{
					kind:"CustomListSelector",
					value:(now.getHours()+(now.getMinutes()>=45))%12 || 12,
					items:(1).upto(12).map(function(i){return {caption:i,value:i}})
				},
				{content:":",className:"colon"},
				{
					kind:"CustomListSelector",
					value:((now.getMinutes()/15+1).floor()*15)%60, // the next quarter-hour
					items:(0).upto(59).map(function(i){return {caption:i.pad(2),value:i}})
				},
				{kind:"CustomListSelector",className:"am",value:(now.getHours()<12 ? 0 : 12),items:[
					{caption:"AM",value:0},
					{caption:"PM",value:12},
				]}

			]}
		]},
		{kind:"DividerDrawer",caption:"Reminders",components:[
			{kind: "VirtualRepeater",onSetupRow:"setupReminder", components:[
				{kind:"Item",layoutKind:"HFlexLayout",components:[
					{kind:"ToggleButton"},
					{kind:"Input",name:"time"},
					{kind:"ListSelector",name:"unit",value:1,items:[
						{caption:"minutes",value:1},
						{caption:"hours",value:60}
					]}
				]}
			]}
		]},
		]},
		{kind: "Toolbar", components:[
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
		"Lorem, this line is far too long to actually, physically fit in the list item.",
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
	reminders: [
		[15,"minutes"],
		[1,"hours"],
	],
	setupReminder: function(inSender, inIndex) {
		console.log(inIndex)
		var row = this.reminders[inIndex];
		if (row) {
			this.$.time.setValue(row[0]);
			this.$.unit.setValue(row[1]);
			return true;
		}
	},
	deleteItem: function(inSender, inIndex) {
		this.notes.splice(inIndex, 1);
	}
});