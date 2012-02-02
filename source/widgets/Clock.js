enyo.kind({
	name: "Widgets.Clock",
	kind:"HFlexBox",
	className:"clock",
	components:[
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
	]
})