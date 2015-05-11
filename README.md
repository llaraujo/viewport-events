#Viewport Events

##Receive notifications when events happen viewport changes


## Dependencies

* Browser API matchMedia (or pollyfill)
* Javascript Lib for Events ([EventEmitter](https://github.com/Wolfy87/EventEmitter), [jQuery.Events](http://api.jquery.com/category/events/) [Backbone.Events](http://backbonejs.org/#Events))

## Usage


###To initialize, pass your lib Events in constructor:

* EventEmitter:
	
	```
	var Events = new EventEmitter();
	var VPEvents = new ViewportEvents(new EventEmitter());
	```
	
* jQuery Events:

	```
	var Events = jQuery;
	var VPEvents = new ViewportEvents(Events);
	```

* BackBone.js Events:

	```
	var Events = Backbone.Events;
	var VPEvents = new ViewportEvents(Events);
	```

### To set event listeners:

```
VPEvents.add({
	'portrait' : '(orientation: portrait)'
});

VPEvents.add({
    'site-lg': "(min-width: 600px)",
    'site-lg-orientation': "(min-width: 600px) and (orientation: portrait)"
});

VPEvents.add({
    'site-md': "(max-width: 599px)",
    'site-lg': "(max-width: 599px)"
});
```

### To remove event listeners:

```
VPEvents.rm('portrait');

VPEvents.rm('site-lg');
VPEvents.rm('site-lg-orientation');

VPEvents.rm('site-md');
VPEvents.rm('site-lg');
```

### Ok! Let's receive event! =)

Try! :)

```
Events.on('site-lg', function(){
	console.log('Inside in my media queries defined! site-lg!');
});
```

Lib automatically creates the 'outside' event to face the media querie created, informing when the viewport is leaving the rule set for you! Example:

You created: 

```
VPEvents.add({
    'site-lg': "(max-width: 599px)"
});
```
And you receive 2 events:

Match your rule:

```
Events.on('site-lg', function(){
	console.log('Inside in my media queries defined! site-lg!');
});
```

Out of your rule:

```
Events.on('site-lg-outside', function(){
	console.log('Out of my media queries defined! site-lg!');
});
```


## Support?
* Check API matchMedia support in [caniuse.com](http://caniuse.com/#search=matchMedia)
* Use polyfill [matchMedia](https://github.com/paulirish/matchMedia.js) by [Paul Irish](https://github.com/paulirish)

## License

[MIT License](http://llaraujo.mit-license.org/) © Leonardo Lima Araujo

