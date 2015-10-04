
$(document).ready(function() {

    $("#owl-example").owlCarousel({

        // Most important owl features
        items : 2,
        itemsCustom : [[0, 1], [400, 1], [700, 1], [1000, 1], [1100, 1], [4000, 10]]
        , itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : true, //забить по ширине, увеличив размер слайдов

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        autoPlay : false, //4000
        stopOnHover : false,

        // Navigation
        navigation : true,
        navigationText : [""," "],
        rewindNav : true,
        scrollPerPage : true,//This affect next/prev buttons and mouse/touch dragging.

        //Pagination
        pagination : true,
        paginationNumbers: true,

        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,//Owl Carousel check window for browser width changes. You can use any other jQuery element to check width changes for example ".owl-demo". Owl will change only if ".owl-demo" get new width.

        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        //Auto height
        autoHeight : false,//Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting.

        //JSON 
        jsonPath : false, 
        jsonSuccess : false,

        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        //Transitions
        transitionStyle : "fade",

        // Other
        addClassActive : true,

        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false, 
        afterInit: false, 
        beforeMove: false, 
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false

    })

    
    $("#owl-example2").owlCarousel({

        // Most important owl features
        items : 2,
        itemsCustom : [[0, 1], [400, 1], [700, 1], [1000, 2], [1100, 4], [4000, 10]]
        , itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : true, //забить по ширине, увеличив размер слайдов

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        autoPlay : false, //4000
        stopOnHover : true,

        // Navigation
        navigation : true,
        navigationText : [""," "],
        rewindNav : true,
        scrollPerPage : false,//This affect next/prev buttons and mouse/touch dragging.

        //Pagination
        pagination : true,
        paginationNumbers: false,

        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,//Owl Carousel check window for browser width changes. You can use any other jQuery element to check width changes for example ".owl-demo". Owl will change only if ".owl-demo" get new width.

        // CSS Styles
        baseClass : "owl-carousel2",
        theme : "owl-theme2",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        //Auto height
        autoHeight : false,//Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting.

        //JSON 
        jsonPath : false, 
        jsonSuccess : false,

        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        //Transitions
        transitionStyle : "fade",

        // Other
        addClassActive : true,

        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false, 
        afterInit: false, 
        beforeMove: false, 
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false

    })

});