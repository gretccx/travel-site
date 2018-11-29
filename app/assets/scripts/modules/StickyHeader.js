import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTiggerElement = $(".large-hero__title");
    this.PageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createHeaderWaypoint();
    this.createPageSectionPoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  createHeaderWaypoint() {
    const that = this;

    new Waypoint({
      element: this.headerTiggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createPageSectionPoints() {
    const that = this;
    this.PageSections.each(function() {
      let currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });

    });
  }
}

export default StickyHeader;
