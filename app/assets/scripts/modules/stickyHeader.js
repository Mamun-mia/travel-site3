import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerlinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		})
	}

	addSmoothScrolling() {
		this.headerlinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
            	if (direction == "down") {
            		that.siteHeader.addClass("site-header--dark");
            	} else {
            		that.siteHeader.removeClass("site-header--dark");
            	}
            }
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPagesection = this;
			new Waypoint({
				element: currentPagesection,
				handler: function(direction) {

					if(direction == "down") {
					var matchingHeaderLink = currentPagesection.getAttribute("data-matching-link");
					that.headerlinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");	
					}
					
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPagesection,
				handler: function(direction) {

					if(direction == "up") {
					var matchingHeaderLink = currentPagesection.getAttribute("data-matching-link");
					that.headerlinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");	
					}
					
				},
				offset: "-40%"
			});
		});
	}

}

export default StickyHeader;