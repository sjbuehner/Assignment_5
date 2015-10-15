    function initRollovers() {
    	function getImage(id) {
    		return document.getElementById(id);
    	}

    	function Rollover(imageId, newImageURL) {
    		var target = this;
    		target.newImageURL = newImageURL;
    		target.image = getImage(imageId);
    		target.oldImageURL = this.image.src;
    		target.image.onmouseover = function () {
    			target.image.src = target.newImageURL;
    		}
    		target.image.onmouseout = function () {
    			target.image.src = target.oldImageURL;
    		}
    	}
    	var image1 = new Rollover('img1', 'home_over.png');
    	var image2 = new Rollover('img2', 'aboutus_over.png');
    	var image3 = new Rollover('img3', 'solutions_over.png');
    	var image4 = new Rollover('img4', 'support_over.png');
    	var image5 = new Rollover('img5', 'contactus_over.png');
    }
    document.addEventListener('DOMContentLoaded', initRollovers, false);